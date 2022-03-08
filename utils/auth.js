const withWalkerAuth = async (req, res, next) => {
  if (!req.session.walkerLogin) {
    res.redirect('/login');
  } else {
    next();
  }
};

const withOwnerAuth = async (req, res, next) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = { withWalkerAuth };
