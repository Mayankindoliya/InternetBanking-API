const BankDetails = require('../models/bankDetails');

class bankDetailsControllers {

  static async generateBankDetails(document, users) {
    if(!users) {
      throw new Error ('User not found !!')
    }
    // assign user in the document, because we have defined user in the model::
    document.users = users
    const bankDetails = await BankDetails.create(document)
    return bankDetails
  };

};

module.exports = bankDetailsControllers;