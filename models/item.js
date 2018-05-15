const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ItemSchema = new Schema({
  itemname: { type: String, require: true, unique: false },
  identical: { type: Number, require: true }
  // itemname: { type: String, require: true, unique: true }
})

module.exports = mongoose.model('Item', ItemSchema)