const router = require('express').Router();
const dogRoutes = require('./dog-routes');
const ownerRoutes = require('./owner-routes');
const walkerRoutes = require('./walker-routes');
const calendarRoutes = require('./calendar-routes');

router.use('/dogs', dogRoutes);
router.use('/owners', ownerRoutes);
router.use('/walkers', walkerRoutes);
router.use('/calendars', calendarRoutes);

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
