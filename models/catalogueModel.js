const mongoose = require('mongoose')

const Schema = mongoose.Schema

const catalogueSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  owner: String,
  image: String,
  postedAt: Date,
  stock: Number,
  review: Array,
  categories: Array
})

const Catalogue = mongoose.model('catalogues', catalogueSchema)

module.exports = { Catalogue }
