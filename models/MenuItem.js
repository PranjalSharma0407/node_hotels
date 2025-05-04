// here we are creating the menu of hotel(Schema) or  structure banate hai ki data ky ky rahega or kis kis field m ayega

const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },

    price:{
        type:Number,
        required:true
    },

    taste:{
        type:String,
        enum:['Sweet','Spicy','Sour'], //Capital small ka dhyan rakhna hai
        required:true
    },

    is_drink:{
        type:Boolean,
        default:false
    },

    ingredients:{
        type:[String],
        default:[]
    },

    num_sales:{
        type:Number,
        default:0
    }

});

const MenuItems = mongoose.model('MenuItems',menuItemSchema);
module.exports = MenuItems;