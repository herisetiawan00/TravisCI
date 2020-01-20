const Hapi = require('@hapi/hapi')
const routes = require('../routes/basic')
const PORT = process.env.PORT || 5000

const server = Hapi.Server({
  port: PORT,
  host: '0.0.0.0'
})

const main = async () => {
  await server.route(routes)
  await server.start()
}

module.exports = {
  main
}
