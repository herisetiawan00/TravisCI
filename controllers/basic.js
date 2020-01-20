exports.basic = async (req, h) => {
  return h.response({ message: 'Hello World' }).code(200)
}
