const mongoose = require('mongoose')
const crypto = require('crypto')
const { v1: uuidv1 } = require('uuid')

var userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        maxlength: 32,
        trim: true    // trims the excess spaces or useless characters
    },
    lastname: {
        type: String,
        maxlength: 32,
        trim: true
    },
    email: {
        type:String,
        trim: true,
        required: true,
        unique: true
    },
    userinfo: {
        type: String,
        trim: true
    },
    encry_password: {
        type: String,
        required: true
    },
    salt: String,
    role: {
        type: Number,
        default: 0,
    },
    purchases: {
        type: Array,
        default: []
    }
},
{timestamps: true}) // notes the time of entry in the database

userSchema.virtual("password")   //doesn't gets saved in the database virtual but helps to create fields that do
    .set(function(password){
        this._password = password   //_ for private variable
        this.salt = uuidv1();
        this.encry_password = this.securePassword(password)
    })
    .get(function(){
        return this._password    //for getting the password
    })


userSchema.methods = {    
    authenticate :function(plainpassword){    //authenticate password by user
        return this.securePassword(plainpassword) ===this.encry_password
    } ,

    securePassword: function(plainpassword){   //generate password hash
        if(!plainpassword) return "";
        try{
            return crypto.createHmac('sha256', this.salt)
            .update(plainpassword)
            .digest('hex');
        } catch(err){
            return ""
        }
    }
}

module.exports = mongoose.model('User',userSchema);