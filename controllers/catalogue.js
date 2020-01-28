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
  const { category, q } = req.query
  const parameter = {}
  if (category != null) {
    Object.assign(parameter, { categories: { $in: [category] } })
  }
  if (q != null) {
    Object.assign(parameter, {
      $or: [
        { title: { $regex: q, $options: 'i' } },
        { description: { $regex: q, $options: 'i' } }
      ]
    })
  }
  return Catalogue.find(parameter)
}
