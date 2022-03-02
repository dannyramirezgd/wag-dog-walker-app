const router = require('express').Router();
const { Dog, Owner, Walker } = require('../models');

router.get('/login', (req, res) => {
  res.render('login');
});

module.exports = router;
