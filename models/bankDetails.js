const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bankDetailsSchema = new Schema (
  {
    bankName: {type: String, required: true},
    branch: {type: String, required: true},
    balancesummary: String,
    accountnumber: {type: Number, required: true},
   description: String ,

   users:
   {
    id: Schema.Types.ObjectId,
    name: String
   }
  },
  {
    timestamps:
    {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
);

module.exports = mongoose.model('bankDetails', bankDetailsSchema);