const router = require('express').Router();
const dogRoutes = require('./dog-routes');
const ownerRoutes = require('./owner-routes');
const walkerRoutes = require('./walker-routes');

//router.use('/dogs', dogRoutes);
router.use('/owners', ownerRoutes);
router.use('/walkers', walkerRoutes);

module.exports = router;
