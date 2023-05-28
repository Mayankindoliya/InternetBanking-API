const Users = require('../models/users');
const bcryptjs = require('bcryptjs');

class authsController {

  static async registerUser(document) {
    const existingUser = await Users.findOne({$or:[{name: document.name}, {emailId: document.emailId}]}).lean()
    if(existingUser){
      throw new Error('User Already exists !!!') 
    }
    const salt = bcryptjs.genSaltSync(10)
    const hash = bcryptjs.hashSync(document.password, salt)
    document.password = hash
    const user = await Users.create(document)
    return user
  }
};

module.exports = authsController;