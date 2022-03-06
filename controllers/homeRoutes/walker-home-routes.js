const router = require('express').Router();
const { Dog, Owner, Walker, Calendar } = require('../../models');

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
    });
    const calendarRequest = await Calendar.findAll({
      where: { walker_id: req.params.id },
      include: {
        model: Dog,
      },
    });

    const walker = singleWalkerData.get({ plain: true });
    const calendar = calendarRequest.map((calendar) =>
      calendar.get({ plain: true }),
    );
    const walkerInfo = { ...walker, calendar: calendar };
    console.log(walkerInfo);
    res.render('walker-dashboard', {
      walkerInfo,
      walkerLogin: true,
      loggedIn: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
