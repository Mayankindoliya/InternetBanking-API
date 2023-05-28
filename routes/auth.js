const express = require('express');

const router = express.Router();

const authsController = require('../controllers/auth');

router.post('/registeruser', (req, res, next) => {
  authsController.registerUser(req.body)
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      next(err)
    })
});

module.exports = router;