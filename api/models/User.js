const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
//const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    name: {type: String, require: true},
    email: {type: String, require: true, unique: true},
    password: {type: String, require: true},
    isAdmin: {
        type: Boolean,
        default: false
    }
},{timestamps: true});

//Validate password match or not
userSchema.methods.matchPassword = async function(enterPasswrod){
    return await bcrypt.compare(enterPasswrod, this.password);
}

//register password hash and store
userSchema.pre("save", async function(next){
    if(!this.isModified('password')){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt)
})

module.exports = mongoose.model("User", userSchema)