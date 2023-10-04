const express = require('express');

const router=express.Router();
const Category=require('./mongo_schema/categories')
const Subcategory=require('./mongo_schema/subcategories')
const Video=require('./mongo_schema/video')



 
/* router.post('/categories', async (req, res) => {
    try {
        // Create the new category
        const category = new Category({
            name: req.body.name
        });
        await category.save();
        const newSubcategories = [];
        for (const subcategoryName of req.body.subcategories) {
            const subcategory = new Subcategory({
                name: subcategoryName,
            
                category: category._id
            });
            await subcategory.save();
            newSubcategories.push(subcategory);
        }
        category.subcategories.push(...newSubcategories.map(subcategory => subcategory._id));
        await category.save();
        res.status(201).json({
            category,
            subcategories: newSubcategories
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.get('/categories', async (req, res) => {
    try {
        const categories = await Category.find().populate('subcategories');
        res.json(categories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
router.get('/categories/:categoryId', async (req, res) => {
    try {
        const category = await Category.findById(req.params.categoryId).populate('subcategories');
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.json(category);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
 
router.get('/categories/subcategories/:categoryId', async (req, res) => {
    try {
        const subcategories = await Subcategory.find({ category: req.params.categoryId });
        res.json(subcategories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}); */
router.get('/categories', async (req, res) => {
    try {
        const categories = await Category.find().populate('subcategories');
        res.json(categories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
router.post('/categories', async (req, res) => {
    try {
        const { name,price ,description ,subcategories } = req.body;
        const category = new Category({
            name,
            price,
            description,
            // imageUrl,
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
});
// Add a new video to a subcategory
router.post('/subcategories/:subcategoryId/videos', async (req, res) => {
    try {
        const { subcategoryId } = req.params;
        const subcategory = await Subcategory.findById(subcategoryId);
        const video = new Video({
            title: req.body.title,
            url: req.body.url,
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
});
// router.get('/categories', async (req, res) => {
//     try {
//         const categories = await Category.find().populate('subcategories');
//         res.json(categories);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });
router.get('/categories/:categoryId/subcategories', async (req, res) => {
    try {
        const { categoryId } = req.params;
        const subcategories = await Subcategory.find({ category: categoryId }).populate('videos');
        res.json(subcategories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
router.get('/subcategories/:subcategoryId/videos', async (req, res) => {
    try {
        const { subcategoryId } = req.params;
        const videos = await Video.find({ subcategory: subcategoryId });
        res.json(videos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
 
 module.exports = router;