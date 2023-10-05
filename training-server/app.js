const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const userRouter = require("./router/userRouter");
const categoriesRouter = require("./router/categoriesRouter");
const dotenv = require("dotenv").config();

//express instance and middleware
const app = express();
app.use(express.json());
app.use(cors());


//routing middleware
app.use("/api/user",userRouter)

//categories router
app.use("/",categoriesRouter)


//Database connection
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    app.listen(5000, () => {
      console.log(`Database connected && Server is running on port ${process.env.PORT}`)
    });
}).catch((e) => console.log(e));




