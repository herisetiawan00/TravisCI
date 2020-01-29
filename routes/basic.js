const { basic } = require('../controllers')

module.exports = [
  {
    method: 'GET',
    path: '/',
    options: {
      description: 'Get and test the API',
      notes: 'Returning hello world',
      tags: ['api', 'test', 'get'],
      handler: basic.root
    }
  },
  {
    method: 'GET',
    path: '/assets/{picname}',
    options: {
      description: 'Get product image',
      notes: 'Returning a image file if name is right',
      tags: ['api', 'image', 'file', 'get'],
      handler: (request, h) => {
        return h.file(`${request.params.picname}`)
      }
    }
  }
]
