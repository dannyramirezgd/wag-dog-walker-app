const router = require('express').Router();

const ownerRoutes = require('./owner-home-routes');
const walkerRoutes = require('./walker-home-routes');
const redirectRoute = require('./home-redirect');
const contactRoute = require('./contact-us-route');

router.use('', redirectRoute);
router.use('/owner', ownerRoutes);
router.use('/walker', walkerRoutes);
router.use('', contactRoute);

module.exports = router;
