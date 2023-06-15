const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    jorgan:{
        type: String,
        required: [true,'Jorgan is manadatory'],
        unique : [true,'Already Exists']
    },
    definition:{
        type:String,
        required:[true,'Definition is manadatory']
    },
    updated_date_time:{
        timestamps:true
    }


});


const Product = new mongoose.model('Product',productSchema);

module.exports = Product;