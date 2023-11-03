const mongoose = require('mongoose');

const userAdminSchema = mongoose.Schema({
    fname: String,
    lname: String,
    contact: Number,
    addres:String,
    email: { type: String, unique: true },
    password: String,
    userType: String,
    data:Date,
});

const AdminUser = mongoose.model("UserAdmininfo", userAdminSchema);

module.exports = AdminUser;
