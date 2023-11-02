const Category = require("../mongo_schema/categories")
const Subcategory = require("../mongo_schema/subcategories")
const Video = require("../mongo_schema/video")
const Cart = require("../mongo_schema/cart")
const Comment = require("../mongo_schema/comment")

const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find().populate('subcategories');
        res.json(categories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const postCategories = async (req, res) => {
    try {
        const { name, subcategories, img } = req.body;
        const category = new Category({
            name,
            subcategories: [],
            image: img
        });
        await category.save();

        const newSubcategories = [];
        for (const subcategoryData of subcategories) {
            // const { images } = req.body;

            const subcategory = new Subcategory({
                name: subcategoryData,
                image: img,
                priceDetails: subcategoryData.priceDetails,
                videos: [],
                category: category._id
            });
            await subcategory.save();
            category.subcategories.push(subcategory);
            newSubcategories.push(subcategory);
        }
        await category.save();
        res.status(201).json({
            category,
            subcategories: newSubcategories,

        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const postVideosInSubcategories = async (req, res) => {
    try {
        const { subcategoryId } = req.params;
        const subcategory = await Subcategory.findById(subcategoryId);
        const video = new Video({
            title: req.body.title,
            url: req.body.url,
            author: req.body.author,
            description: req.body.description,
            // priceDetails: req.body.priceDetails,
            reviews: req.body.reviews,
            ratings: req.body.ratings,
            subcategory: subcategoryId,
            category: subcategory.category,
            image: req.body.image
        });
        await video.save();
        subcategory.videos.push(video);
        await subcategory.save();
        res.status(201).json(video);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const getAllSubcategories = async (req, res) => {
    try {
        const { categoryId } = req.params;
        const subcategories = await Subcategory.find({ category: categoryId }).populate('videos');
        res.json(subcategories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getSubCategoriesVideo = async (req, res) => {
    try {
        const { subcategoryId } = req.params;
        const videos = await Video.find({ subcategory: subcategoryId });
        res.json(videos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const postCarts = async (req, res) => {

    


    try {
        const { courseName, price, description, userId, image, subcategoryId, categoryId } = req.body;


        const cart = await Cart.create({ courseName, price, description, userId, image, subcategory: subcategoryId, category: categoryId })


        res.status(201).json({
            message: 'Cart created successfully',
            cart: cart,
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getallcart = async (req, res) => {
    const {userId}=req.params
    try {
        const cart = await Cart.find({userId:userId});
        res.json(cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const deletecartItem = async (req, res) => {
    const { userId, cartId } = req.params
    try {
        const deletedItem = await Cart.findOneAndDelete({ userId: userId, _id: cartId })
        
        if (deletedItem) {
            res.status(200).json({
                status: "Cart Deleted Successfully",
                deletedItem
            })
        }
    } catch (error) {
        if (error) throw error
        res.status(504).json(error.message)
    }

}

const addComment = async (req, res) => {
    try {
      const { content,userId ,videos,username, reviewRating} = req.body;
     

  

        const newComment = await Comment.create({ content, userId, videos, username,reviewRating })
        res.status(200).json(newComment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
const getallcomments = async (req, res) => {
    // const { videos,userId } = req.params;

    try {
        // console.log(userId,videos)

        const comment = await Comment.find();
        res.json(comment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

  
module.exports = {
    getAllCategories, postCategories, postVideosInSubcategories,
    getAllSubcategories, getSubCategoriesVideo, postCarts, getallcart, deletecartItem, addComment,getallcomments

}