const router = require('express').Router();
const { Dog, Owner, Walker } = require('../../models');

router.get('/sign-up', (req, res) => {
  res.render('sign-up');
});

module.exports = router;
