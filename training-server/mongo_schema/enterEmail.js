const { model, Schema } = require("mongoose");
const bcrypt = require("bcrypt")

//signup user schema
const userEnterSchema = new Schema({
    email: {
        type: String
    }
}, {
    collection: "enterEmail",
});


module.exports = model("enterEmail", userEnterSchema);












