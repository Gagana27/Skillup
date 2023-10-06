const Category=require("../mongo_schema/categories")
const Subcategory=require("../mongo_schema/subcategories")
const Video=require("../mongo_schema/video")

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
        const { name,price ,description ,subcategories } = req.body;
        const category = new Category({
            name,
            price,
            description,
            subcategories: [],
        });
        await category.save();
        const newSubcategories = [];
        for (const subcategoryName of subcategories) {
            const subcategory = new Subcategory({
                name: subcategoryName,
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
            // description:req.body.description,
            author:req.body.author,
            subcategory: subcategoryId,
            category: subcategory.category
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

module.exports={getAllCategories,postCategories,postVideosInSubcategories,getAllSubcategories,getSubCategoriesVideo}