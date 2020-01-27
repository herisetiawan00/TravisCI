const { basic } = require('../controllers')

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: basic.root
  },
  {
    method: 'GET',
    path: '/assets/{picname}',
    handler: (request, h) => {
      return h.file(`${request.params.picname}`)
    }
  }
]
