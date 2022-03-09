const router = require('express').Router();
const { Dog, Owner, Walker, Calendar } = require('../../models');

router.get('/dashboard/:id', async (req, res) => {
  try {
    const singleOwnerData = await Owner.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: Dog,
        },
      ],
    });
    const calendarAvailable = await Calendar.findAll({
      where: { dog_id: null },
      include: {
        model: Walker,
      },
    });
    const calendar = calendarAvailable.map((data) => data.get({ plain: true }));
    const owner = singleOwnerData.get({ plain: true });
    const ownerInfo = { ...owner, calendar: calendar };
    console.log(ownerInfo);
    res.render('owner-dashboard', {
      ownerInfo,
      loggedIn: true,
      walkerLogin: false,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/sign-up', (req, res) => {
  res.render('sign-up');
});

router.get('/:id/add-dog', async (req, res) => {
  try {
    const ownerData = await Owner.findOne({
      where: { id: req.params.id },
    });
    const allWalkerData = await Walker.findAll({});
    const owner = ownerData.get({ plain: true });
    const walker = allWalkerData.map((walker) => walker.get({ plain: true }));
    res.render('add-dog', { owner, walker });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;
