const express = require('express');
const router = express.Router();

/* GET health check listing. */
router.get('/', function (req, res, next) {
  const data = {
    message: 'Yep! I\'m alive!'
  };
  res.json(data);
});

module.exports = router;
