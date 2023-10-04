// const express = require('express');

// const router=express.Router();
// const Subcategory=require('./mongo_schema/subcategories')
// const Video = require('./mongo_schema/video')


 
// router.post('/subcategories', async (req, res) => {
//     try {
//         // Create the new category
//         const video = new Video({
//             url: req.body.url
//         });
//         await video.save();
//         const newSubcategories = [];
//         for (const subcategoryName of req.body.subcategories) {
//             const subcategory = new Subcategory({
//                 name: subcategoryName,
//                 video: video._id


                
//             });
//             await subcategory.save();
//             newSubcategories.push(subcategory);
//         }
//         video.subcategories.push(...newSubcategories.map(subcategory => subcategory._id));
//         await video.save();
//         res.status(201).json({
//             video,
//             subcategories: newSubcategories
//         });
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//         console.log(res);
//     }
// });

// router.get('/subcategories', async (req, res) => {
//     try {
//         const subcategories = await Subcategory.find().populate('videos');
//         res.json(subcategories);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });
// router.get('/subcategories/:subcategoryId', async (req, res) => {
//     try {
//         const subcategory = await Subcategory.findById(req.params.subcategoryId).populate('videos');
//         if (!subcategory) {
//             return res.status(404).json({ message: 'subCategory not found' });
//         }
//         res.json(subcategory);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });
 
// router.get('subcategories/video/:subcategoryId', async (req, res) => {
//     try {
//         const videos = await Video.find({subcategory: req.params.subcategoryId });
//         res.json(videos);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });
 
//  module.exports = router;















// /* const express=require("express");
// const mongoose = require('mongoose');
// const mongo=express.Router();
// const app=express();
// app.use(express.json());
// const Categories=require('./mongo_schema/subcategories')


 
//    mongo.route("/subcategories").post((req,res)=>{
//     const name=req.body.name;
//     const categories_id=req.body.categories_id;
//     try{

//     const  newcategories= new Categories({
//         name,
//         categories_id
//    })
//     newcategories.save();

// res.send({status:"ok"});
// }catch (error){
//     res.send({status:"error"});
// }
// });

// mongo.get("/subcategories",async(req,res)=>{
//     try{
//         const allCat=await Categories.find({});
//         res.send(allCat)

//     }catch(error){
//         console.log(error);
//     }
// });


  

 
 
//  module.exports=mongo; */