const { user } = require('../controllers')

module.exports = [
  {
    method: 'POST',
    path: '/register',
    handler: user.register
  },
  {
    method: 'POST',
    path: '/login',
    handler: user.login
  }
]
