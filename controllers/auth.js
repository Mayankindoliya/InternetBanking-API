const Users = require('../models/users');
const bcryptjs = require('bcryptjs');
const Jwt = require('../helpers/jwt');

class authsController {

  static async registerUsers(document) {
    const existingUser = await Users.findOne({ $or: [{ name: document.name }, { emailId: document.emailId }] }).lean()
    if (existingUser) {
      throw new Error('User Already exists !!!')
    }
    const salt = bcryptjs.genSaltSync(10)
    const hash = bcryptjs.hashSync(document.password, salt)
    document.password = hash
    const Users = await Users.create(document)
    return users
  };

  static async loginUsers(document) {
    const users = await Users.findOne({ username: document.username }, 'password emailId address').lean()
    if (!users) {
      throw new Error('User not Found !!!')
    }
    if (!bcryptjs.compareSync(document.password, users.password)) {
      throw new Error('Password not Matched !!!')
    }
    const token = Jwt.createJwt({id: users._id})
    console.log('Token created !!')
    return token
  };

};

module.exports = authsController;