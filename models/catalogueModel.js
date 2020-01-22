const mongoose = require('mongoose')

const Schema = mongoose.Schema

const catalogueSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  owner: String,
  imgUri: String,
  postedAt: Date
})

const Catalogue = mongoose.model('catalogues', catalogueSchema)

module.exports = { Catalogue }
