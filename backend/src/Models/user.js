const mongoose = require('mongoose');
const validator =  require('validator')


const userSchema = new mongoose.Schema({

    firstName:{
        type:true,
        minLength:[3,'Minimum length is 3 for firstName'],
        required:[true,'firstName is required']
    },
    lastName:{
        type:true,
        minLength:[3,'Minimum length is 3 for lastName']
    },
    email:{
        type:String,
        unique: [true, "Email id already exists"],
        validate(value){
            if(!validator.isEmail(value)){
              throw new Error('Invalid Email')
            }
        }

    },
    password:{
        type:String,
        minlength:[8,'Minimum length in 8 for password']
    },
    updated_date_time:{
        timestamps:true
    }


}) 

const User = new mongoose.model('User',userSchema);
module.exports = User;