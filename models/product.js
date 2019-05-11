var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    name: {
        type: String,
        required: true
    }
},
);

var Products = mongoose.model('Product', productSchema);
module.exports = Products;