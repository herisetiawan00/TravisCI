const { User } = require('../models/userModel')
exports.register = async (req, h) => {
  const {
    email,
    password,
    username,
    firstname,
    lastname,
    birth,
    address
  } = req.payload
  const getEmail = await User.find({ email: email })
  const getUsername = await User.find({ username: username })
  if (getEmail.length === 0) {
    if (getUsername.length === 0) {
      await User.insertMany({
        email,
        password,
        username,
        firstname,
        lastname,
        birth,
        address
      })
      return h.response({ success: true }).code(201)
    } else {
      return h.response({ success: false, message: 'Username already used' }).code(400)
    }
  } else {
    return h.response({ success: false, message: 'Email already used' }).code(400)
  }
}
