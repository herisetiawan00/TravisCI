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
  },
  {
    method: 'POST',
    path: '/cart/remove',
    handler: cart.removeCart
  },
  {
    method: 'POST',
    path: '/cart/custom',
    handler: cart.customCart
  }
]
