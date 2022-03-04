const router = require('express').Router();
const { Dog, Owner, Walker } = require('../../models');

router.get('/sign-up', (req, res) => {
  res.render('walker-signup');
});

router.get('/login', (req, res) => {
  res.render('walker-login');
});

router.get('/dashboard/:id', async (req, res) => {
  try {
    const singleWalkerData = await Walker.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: Dog,
          attributes: ['dog_name', 'size'],
          include: {
            model: Owner,
            attributes: ['owner_name', 'email', 'phone', 'address'],
          },
        },
      ],
    });
    const walker = singleWalkerData.get({ plain: true });
    res.render('walker-dashboard', {
      walker,
      walkerLogin: true,
      loggedIn: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
