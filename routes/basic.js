const handler = require('../controllers/basic')

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: handler.basic
  }
]
