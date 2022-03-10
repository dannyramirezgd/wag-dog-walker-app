const router = require('express').Router();
const { Dog, Walker, Calendar } = require('../../models');

router.get('/sign-up', (req, res) => {
  res.render('walker-signup');
});

router.get('/login', (req, res) => {
  res.render('walker-login');
});

router.get('/dashboard/:id', async (req, res) => {
  if (req.session.walkerLogin) {
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
      /*in order to ensure all the information we needed we restructured the walkerInfo
    object to include both walker and calendar data before we passed it into 
    handlebars
    */
      const walker = singleWalkerData.get({ plain: true });
      const calendar = calendarRequest.map((calendar) =>
        calendar.get({ plain: true }),
      );
      const walkerInfo = { ...walker, calendar: calendar };
      res.render('walker-dashboard', {
        walkerInfo,
        loggedIn: true,
        walkerLogin: true,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  } else {
    res.redirect('/login');
  }
});

module.exports = router;
