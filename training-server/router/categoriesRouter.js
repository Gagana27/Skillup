const express = require('express');
const { getAllCategories, postCategories, postVideosInSubcategories, getAllSubcategories, getSubCategoriesVideo } = require('../controller/categoriesController');
const categoriesRouter=express.Router();

categoriesRouter.get('/categories',getAllCategories);

categoriesRouter.get('/categories/:categoryId/subcategories',getAllSubcategories);

categoriesRouter.get('/subcategories/:subcategoryId/videos',getSubCategoriesVideo);

categoriesRouter.post('/categories',postCategories);

categoriesRouter.post('/subcategories/:subcategoryId/videos',postVideosInSubcategories);

categoriesRouter.post('/categories/:categoryId/subcategories', postCategories);


module.exports=categoriesRouter;