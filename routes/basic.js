const { basic } = require('../controllers')

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: basic.root
  }
]
