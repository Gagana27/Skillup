const Category=require("../mongo_schema/categories")
const Subcategory=require("../mongo_schema/subcategories")
const Video=require("../mongo_schema/video")
const Cart=require("../mongo_schema/cart")

const getAllCategories=async (req,res)=>{
    try {
        const categories = await Category.find().populate('subcategories');
        res.json(categories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const postCategories=async (req,res)=>{
    try {
        const { name ,subcategories,img } = req.body;
        const category = new Category({
            name,
            subcategories: [],
            image:img
        });
        await category.save();

        const newSubcategories = [];
        for (const  subcategoryData of subcategories) {
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

const postVideosInSubcategories=async (req,res)=>{
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
            ratings : req.body.ratings,
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

const getAllSubcategories=async (req,res)=>{
    try {
        const { categoryId } = req.params;
        const subcategories = await Subcategory.find({ category: categoryId }).populate('videos');
        res.json(subcategories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getSubCategoriesVideo=async (req,res)=>{
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
      const { courseName , price , description ,userId ,image,subcategoryId,categoryId} = req.body;

      console.log("dummy",{ courseName , price , description ,userId ,image,subcategoryId,categoryId})
    
      const cart = await Cart.create({ courseName , price , description ,userId ,image,subcategory:subcategoryId,category:categoryId})
  
  
      res.status(201).json({
        message: 'Cart created successfully',
        cart: cart,
      });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

  const getallcart=async (req,res)=>{
    try {
        // const { categoryId } = req.params;
        // const { subcategoryId } = req.params;

        const cart = await Cart.find();
        res.json(cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}



  






module.exports={getAllCategories,postCategories,postVideosInSubcategories,getAllSubcategories,getSubCategoriesVideo,postCarts,getallcart}