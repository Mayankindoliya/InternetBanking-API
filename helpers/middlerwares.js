const Jwt = require('./jwt');
const Users = require('../models/users')

// Authentication Middleware:
async function AuthenticationMiddleware(req, res, next) {
  const authHeader = req.headers.authorization
  try {
    if (authHeader) {
      const token = authHeader.split(' ')[1]
      const payload = Jwt.VerifyJwt(token)
      const users = await Users.findOne({ _id: payload.id }).lean()
      console.log(users)  //// Log the result to check if it returns as expected:
      users.id = payload.id
      req.user = users 
    }
    next()
  }
  catch (err) {
    console.log("Error during Authorization")
    next(err)
  } 
};


// Error handling middlerware:
function ErrorHandlingMiddleware(err, req, res, next) {
  console.log(err)
  res.json({ "message": err.message, "stack": err.stack })
};


module.exports = {
  ErrorHandlingMiddleware,
  AuthenticationMiddleware
};