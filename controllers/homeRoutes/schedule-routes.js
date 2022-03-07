const router = require('express').Router();
const { Walker, Calendar } = require('../../models');

router.get('/', async (req, res) => {
  try {
    //Select * from calendar where dog_id IS NULL;
    const calendarAvailable = await Calendar.findAll({
      where: { dog_id: null },
      include: {
        model: Walker,
      },
    });
    const calendar = calendarAvailable.map((data) => data.get({ plain: true }));
    res.render('schedule-openings', {
      calendar,
      loggedIn: true,
      walkerLogin: false,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
