var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    Product_name: {
        type: String,
        required: true
    },

    Product_type: {
        type: String,
        required: true
    },

    Product_description: {
        type: String,
        required: true
    },

    Product_price: {
        type: String,
        required: true
    }
},
);

var Products = mongoose.model('Product', productSchema);
module.exports = Products;