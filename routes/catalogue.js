const { catalogue } = require('../controllers')

module.exports = [
  {
    method: 'POST',
    path: '/catalogue',
    handler: catalogue.postCatalogue
  }
]
