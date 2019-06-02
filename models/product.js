var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var productSchema = new Schema({
  Product_name: {
    type: String,
    required: true,
    default: false
  },

  Product_type: {
    type: Schema.Types.ObjectId,
    ref: 'product_type',
    required: true
  },

  Product_description: {
    type: String,
    required: true
  },

  Product_price: {
    type: String,
    required: true
  },

  quantity: {
    type: Number,
    required: true
  },

  product_Image:{
    type: String,
    required: ''
  }
},
{
  timestamps: true
});

var Products = mongoose.model("Product", productSchema);
module.exports = Products;
