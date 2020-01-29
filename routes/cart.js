const { cart } = require('../controllers')

module.exports = [
  {
    method: 'POST',
    path: '/cart',
    handler: cart.getCart
  },
  {
    method: 'POST',
    path: '/cart/new',
    handler: cart.addCart
  }
]
