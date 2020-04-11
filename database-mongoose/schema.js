const mongoose = require('mongoose')



let productSchema = mongoose.Schema({
  name: String,
  gender: String,
  discountPrice: Number,
  type: String,
  price: Number,
  nikeID: {type: Number, index:true},
  colorStyles: [String],
  productPictures: [String],
  productDetails: {
    weight: Number,
    last: String,
    offset: String,
    style: String,
  },
  availSizes: {
    '5': Boolean,
    '5x5': Boolean,
    '6': Boolean,
    '6x5': Boolean,
    '7': Boolean,
    '7x5': Boolean,
    '8': Boolean,
    '8x5': Boolean,
    '9': Boolean,
    '9x5': Boolean,
    '10': Boolean,
    '10x5': Boolean,
    '11': Boolean,
    '11x5': Boolean,
    '12': Boolean,
    '12x5': Boolean,
    '13': Boolean,
    '13x5': Boolean,
    '14': Boolean,
    '15': Boolean,
    '16': Boolean,
    '17': Boolean,
    '18': Boolean
  }
})



module.exports = productSchema
