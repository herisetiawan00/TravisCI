const { Cart } = require('../models/cartModel')
const { User } = require('../models/userModel')

const checkEmail = async (email, password) => {
  const getEmail = await User.findOne({ email: email })
  return getEmail != null && getEmail.password === password
}

const cartSaver = async ({ exist, cart, product, email, products }) => {
  if (!exist) {
    cart.products.push(product)
    await cart.save()
  } else {
    await Cart.updateOne({ user: email }, { products: cart.products })
  }
}

const addCart = async ({ email, id }) => {
  const cart = await Cart.findOne({ user: email })
  const product = { id: id, quantity: 1 }
  if (cart == null) {
    const cart = { user: email, products: [] }
    cart.products.push(product)
    await Cart.insertMany(cart)
  } else {
    let found = false
    for (var i = 0; i < cart.products.length; i++) {
      if (cart.products[i].id === id) {
        found = true
        cart.products[i].quantity = cart.products[i].quantity + 1
      }
    }
    cartSaver({
      exist: found,
      cart: cart,
      product: product,
      email: email
    })
  }
}
exports.getCart = async (req, h) => {
  if (checkEmail(req.payload.email, req.payload.password)) {
    return Cart.findOne({ user: req.payload.email })
  }
}

exports.addCart = async (req, h) => {
  if (checkEmail(req.payload.email, req.payload.password)) {
    addCart({ email: req.payload.email, id: req.payload.id })
    return h.response({ success: true }).code(201)
  } else {
    return h.response({ success: false, message: 'Forbidden' }).code(403)
  }
}
