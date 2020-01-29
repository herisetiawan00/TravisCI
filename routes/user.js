const { user } = require('../controllers')
const Joi = require('@hapi/joi')

module.exports = [
  {
    method: 'POST',
    path: '/register',
    options: {
      description: 'Register new account',
      notes: 'Register new account by sending post to this path',
      tags: ['api', 'post'],
      handler: user.register,
      validate: {
        payload: Joi.object({
          email: Joi.string().regex(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/),
          password: Joi.string().regex(/^(?=.*\d).{6,16}$/),
          username: Joi.string().regex(/^[\w-.\_]{5,12}$/),
          firstname: Joi.string().regex(/^[a-zA-Z\s]{3,20}$/),
          lastname: Joi.string().regex(/^[a-zA-Z\s]{3,20}$/)
        })
      }
    }
  },
  {
    method: 'POST',
    path: '/login',
    options: {
      description: 'Login to existing account',
      notes: 'Login here if you have an account on this API',
      tags: ['api', 'post'],
      handler: user.login,
      validate: {
        payload: Joi.object({
          email: Joi.string().regex(/^(?:[\w-.]+@([\w-]+.)+[\w-]{2,4}|[\w-.\_]{5,12})$/),
          password: Joi.string().regex(/^(?=.*\d).{6,16}$/)
        })
      }
    }
  }
]
