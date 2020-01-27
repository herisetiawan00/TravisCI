const { Catalogue } = require('../models/catalogueModel')
exports.postCatalogue = async (req, h) => {
  const { title, description, price, owner } = req.payload
  await Catalogue.insertMany({
    title: title,
    description: description,
    price: price,
    owner: owner
  })
  return h.response({ success: true }).code(201)
}

exports.getCatalogue = async (req, h) => {
  return Catalogue.find({})
}
