const router = require('express').Router();

router.get('/', (req, res) => {
  console.log(req.session.ownerLogin);
  if (req.session.ownerLogin) {
    res.redirect(`/owner/dashboard/${owner.id}`);
    return;
  } else if (req.session.walkerLogin) {
    res.redirect(`/walker/dashboard/${walker.id}`);
    return;
  } else {
    res.redirect('/login');
  }
});

router.get('/login', (req, res) => {
  if (req.session.ownerLogin) {
    res.redirect('/owner/dashboard');
    return;
  } else if (req.session.walkerLogin) {
    res.redirect('/walker/dashboard');
    return;
  }
  res.render('login');
});
module.exports = router;
