const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  const data = {
    message: 'Root path /'
  };
  res.json(data);
});

module.exports = router;
