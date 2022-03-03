const router = require('express').Router();
const { Dog, Owner, Walker } = require('../../models');

router.get('/dashboard/:id', async (req, res) => {
  try {
    const singleOwnerData = await Owner.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: Dog,
          attributes: ['dog_name', 'size'],
          include: {
            model: Walker,
            attributes: [
              'walker_name',
              'email',
              'phone',
              'hourly_rate',
              'times_available',
            ],
          },
        },
      ],
    });
    const owner = singleOwnerData.get({ plain: true });
    res.render('owner-dashboard', { owner, loggedIn: true });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/sign-up', (req, res) => {
  res.render('sign-up');
});

module.exports = router;
