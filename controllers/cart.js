const { Cart } = require('../models/cartModel')
const { User } = require('../models/userModel')

exports.getCart = async (req, h) => {
  const getEmail = await User.findOne({ email: req.payload.email })
  if (getEmail != null && getEmail.password === req.payload.password) {
    return Cart.find({ user: req.payload.email })
  }
}

exports.addCart = async (req, h) => {
  const getEmail = await User.findOne({ email: req.payload.email })
  if (getEmail != null && getEmail.password === req.payload.password) {
    const cart = await Cart.findOne({ user: req.payload.email })
    const product = { id: req.payload.id, quantity: 1 }
    if (cart == null) {
      const cart = { user: req.payload.email, products: [] }
      cart.products.push(product)
      await Cart.insertMany(cart)
    } else {
      let found = false
      for (var i = 0; i < cart.products.length; i++) {
        if (cart.products[i].id === req.payload.id) {
          found = true
          cart.products[i].quantity = cart.products[i].quantity + 1
        }
      }
      console.log(found)
      if (!found) {
        cart.products.push(product)
        await cart.save()
      } else {
        await Cart.updateOne({ user: req.payload.email }, { products: cart.products })
      }
    }
    return h.response({ success: true }).code(201)
  } else {
    return h.response({ success: false, message: 'Forbidden' }).code(403)
  }
}
