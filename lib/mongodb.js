const mongoose = require('mongoose')
const mongoUrl = 'mongodb+srv://heri:terserah@blastzcluster-lzfxb.mongodb.net/iBuy'

const server = mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
if (server) { console.log('Connected to the server') }
mongoose.set('debug', true)

module.exports = {
  mongodb: server
}
