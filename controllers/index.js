const router = require('express').Router()

const apiRoutes = require('./api')
//const htmlRoutes = require('./html/owner-dashboard')

//router.use('/html', htmlRoutes)
router.use('/api', apiRoutes)

module.exports = router
