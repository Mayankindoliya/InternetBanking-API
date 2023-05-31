const Jwt = require('jsonwebtoken');

function createJwt(payload) {
  const token = Jwt.sign(payload, process.env.JWT_SECRETKEY, { expiresIn: '2 days' })
  return token
};

function VerifyJwt(token) {
 const payload = Jwt.verify(token, process.env.JWT_SECRETKEY)
 return payload
};

module.exports = {
  createJwt,
  VerifyJwt
}