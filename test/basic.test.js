const Lab = require('@hapi/lab')
const { expect } = require('@hapi/code')
const { it, beforeEach, afterEach, describe } = exports.lab = Lab.script()
const { init, register } = require('../lib/server')

register()
describe('GET /', () => {
  let server

  beforeEach(async () => {
    server = await init()
  })

  afterEach(async () => {
    await server.stop()
  })

  it('Try open API', async () => {
    const res = await server.inject({
      method: 'GET',
      url: '/'
    })
    expect(res.result.message).to.equal('Hello World')
  })
}
)
