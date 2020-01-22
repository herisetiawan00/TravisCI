const Hapi = require('@hapi/hapi')
const { mongodb } = require('./mongodb')
const routes = require('../routes')
const PORT = process.env.PORT || 5000

const server = Hapi.Server({
  port: PORT,
  host: '0.0.0.0'
})

const register = async () => {
  mongodb()
  server.route(routes)
}
const main = async () => {
  try {
    await register()
    await server.start()
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

const init = async () => {
  await server.initialize()
  return server
}

module.exports = {
  main,
  init,
  register
}
