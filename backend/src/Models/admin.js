const mongoose = require('mongoose');
const validator =  require('validator')


const adminSchema = new mongoose.Schema({

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

const Admin = new mongoose.model('Admin',adminSchema);
module.exports = Admin;