const mongoose = require('mongoose')
const mongoUrl = 'mongodb://heri:terserah@blastzcluster-shard-00-00-lzfxb.mongodb.net:27017,blastzcluster-shard-00-01-lzfxb.mongodb.net:27017,blastzcluster-shard-00-02-lzfxb.mongodb.net:27017/iBuy?replicaSet=BlastzCluster-shard-0&ssl=true&authSource=admin'

const server = async () => {
  try {
    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })
    console.log(mongoUrl)
  } catch (err) {
    console.error(err.message)
    process.exit(1)
  }
}

module.exports = {
  mongodb: server
}
