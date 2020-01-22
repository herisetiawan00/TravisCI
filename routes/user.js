const { user } = require('../controllers')

module.exports = [
  {
    method: 'Post',
    path: '/register',
    handler: user.register
  }
]
