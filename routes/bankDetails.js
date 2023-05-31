const express = require('express');
const router = express.Router();
const bankDetailsControllers = require('../controllers/bankDetails');

router.post('/bankdetails', (req, res, next) => {
  bankDetailsControllers.generateBankDetails(req.body, req.user)
  .then((data) => {
    res.json(data)
  })
  .catch((err) => {
    next(err)
  })
});

module.exports = router;