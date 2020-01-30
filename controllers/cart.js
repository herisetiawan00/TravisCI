const { Cart } = require('../models/cartModel')
const { User } = require('../models/userModel')
const { Catalogue } = require('../models/catalogueModel')

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

const removeCart = async ({ email, id }) => {
  const cart = await Cart.findOne({ user: email })
  for (var i = 0; i < cart.products.length; i++) {
    if (cart.products[i].id === id) {
      cart.products[i].quantity = cart.products[i].quantity - 1
    }
  }
  await Cart.updateOne({ user: email }, { products: cart.products })
}
exports.getCart = async (req, h) => {
  if (checkEmail(req.payload.email, req.payload.password)) {
    const cart = await Cart.findOne({ user: req.payload.email })
    const catalogue = await Catalogue.find({})
    const cartProducts = (cart.products)
      .map(
        (x) =>
          Object.assign(x,
            (catalogue
              .filter(
                (y) => y.id === x.id)[0]._doc)
          )
      )
    return cartProducts
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

exports.removeCart = async (req, h) => {
  if (checkEmail(req.payload.email, req.payload.password)) {
    removeCart({ email: req.payload.email, id: req.payload.id })
    return h.response({ success: true }).code(201)
  } else {
    return h.response({ success: false, message: 'Forbidden' }).code(403)
  }
}
