const router = require('express').Router();

const ownerRoutes = require('./owner-home-routes');
const walkerRoutes = require('./walker-home-routes');
const redirectRoute = require('./home-redirect');

router.use('', redirectRoute);
router.use('/owner', ownerRoutes);
router.use('/walker', walkerRoutes);

module.exports = router;
