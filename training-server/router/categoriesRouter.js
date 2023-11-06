const express = require('express');
const { getAllCategories, postCategories, postVideosInSubcategories, getAllSubcategories, getSubCategoriesVideo,postCarts, getallcart, deletecartItem ,addComment,getallcomments,deletecommentItem} = require('../controller/categoriesController');
const categoriesRouter=express.Router();

categoriesRouter.get('/categories',getAllCategories);

categoriesRouter.get('/categories/:categoryId/subcategories',getAllSubcategories);

categoriesRouter.get('/subcategories/:subcategoryId/videos',getSubCategoriesVideo);

categoriesRouter.post('/categories',postCategories);

categoriesRouter.post('/subcategories/:subcategoryId/videos',postVideosInSubcategories);

categoriesRouter.post('/categories/:categoryId/subcategories', postCategories);

categoriesRouter.post('/cart',postCarts);

categoriesRouter.delete("/deleteCartItem/:userId/:cartId",deletecartItem)

categoriesRouter.post("/comments", addComment);

categoriesRouter.get("/comments/:videos", getallcomments);

categoriesRouter.delete("/deletecommentItem/:commentId",deletecommentItem);



categoriesRouter.get('/cart/:userId',getallcart);







module.exports=categoriesRouter;