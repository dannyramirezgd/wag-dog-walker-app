const router = require('express').Router();

/* To ensure the user couldn't get far without
logging in we made sure to redirect unless
certain session requirements were met.
*/
router.get('/', (req, res) => {
  if (req.session.walkerLogin) {
    res.redirect(`/walker/dashboard/${req.session.user_id}`);
    return;
  } else if (req.session.loggedIn) {
    res.redirect(`/owner/dashboard/${req.session.user_id}`);
    return;
  } else {
    res.render('homepage');
  }
});

router.get('/login', (req, res) => {
  if (req.session.walkerLogin) {
    res.redirect(`/walker/dashboard/${req.session.user_id}`);
    return;
  } else if (req.session.loggedIn) {
    res.redirect(`/owner/dashboard/${req.session.user_id}`);
    return;
  }
  res.render('login');
});

router.get('/contact-us', (req, res) => {
  res.render('contact-us');
});

router.get('/about-us', (req, res) => {
  res.render('about-us');
});

module.exports = router;
