const { catalogue } = require('../controllers')
const Joi = require('@hapi/joi')

module.exports = [
  {
    method: 'GET',
    path: '/catalogue',
    options: {
      description: 'Get all Products',
      notes: 'You can get it by category by passing query \'category\' or you can search text by passing query \'q\'',
      tags: ['api', 'get'],
      handler: catalogue.getCatalogue,
      validate: {
        query: Joi.object({
          q: Joi.string(),
          category: Joi.string().valid('Phone', 'Laptop', 'Electricity', 'Ticket', 'Subscription', 'Travel', 'Food', 'Discount', 'Automotive', 'Groceries', 'Train', 'Insurance', 'Fashion', 'Accessories', 'Pets', 'Books')
        })
      }
    }
  }
]
