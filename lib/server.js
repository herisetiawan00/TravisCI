const Hapi = require('@hapi/hapi')
const routes = require('../routes/basic')
const PORT = process.env.PORT || 5000

const server = Hapi.Server({
  port: PORT,
  host: '0.0.0.0'
})

server.route(routes)

const main = async () => {
  await server.start()
}

const init = async () => {
  await server.initialize()
  return server
}

module.exports = {
  main,
  init
}
