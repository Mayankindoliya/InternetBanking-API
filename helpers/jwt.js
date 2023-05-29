const Jwt = require('jsonwebtoken');

function createJwt(payload) {
  const token = Jwt.sign(payload, process.env.JWT_SECRETKEY, { expiresIn: '2 days' })
  return token
}

module.exports = {
  createJwt
}