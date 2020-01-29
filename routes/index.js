const basic = require('./basic')
const catalogue = require('./catalogue')
const user = require('./user')
const cart = require('./cart')

module.exports = [].concat(basic, catalogue, user, cart)
