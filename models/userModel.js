const mongoose = require('mongoose')

const Schema = mongoose.Schema
const userSchema = new Schema({
  email: String,
  password: String,
  username: String,
  firstname: String,
  lastname: String,
  birth: Date,
  address: String
})

const User = mongoose.model('users', userSchema)

module.exports = { User }
