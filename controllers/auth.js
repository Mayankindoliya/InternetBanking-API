const Users = require('../models/users');
const bcryptjs = require('bcryptjs');

class authsController {

  static async registerUser(document) {
    const salt = bcryptjs.genSaltSync(10)
    const hash = bcryptjs.hashSync(document.password, salt)
    document.password = hash
    const user = await Users.create(document)
    return user
  }
};

module.exports = authsController;