const router = require('express').Router();

router.get('/', (req, res) => {
  if (req.session.walkerLogin) {
    res.redirect(`/walker/dashboard/${req.session.user_id}`);
    return;
  } else if (req.session.loggedIn) {
    res.redirect(`/owner/dashboard/${req.session.user_id}`);
    return;
  } else {
    // res.redirect('/login');
    // I main.handlebars have nav and footer. the login btn on website should redirect to login page.
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
