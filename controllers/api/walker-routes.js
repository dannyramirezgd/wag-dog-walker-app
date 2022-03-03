const router = require('express').Router();
const { Dog, Walker, Owner } = require('../../models');

// GET /api/walkers all the walkers information.
router.get('/', async (req, res) => {
  try {
    const allWalkerData = await Walker.findAll({
      include: [
        {
          model: Dog,
          attributes: ['dog_name'],
          include: {
            model: Owner,
            attributes: ['owner_name', 'email', 'address', 'phone'],
          },
        },
      ],
    });
    // responding in json format.
    res.json(allWalkerData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET /api/walkers/:id single walker info based on its id.
router.get('/:id', async (req, res) => {
  try {
    const singleWalkerData = await Walker.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: Dog,
          attributes: ['dog_name'],
          include: {
            model: Owner,
            attributes: ['owner_name', 'email', 'address', 'phone'],
          },
        },
      ],
    });
    if (!singleWalkerData) {
      res.status(404).json({ message: 'No dog walker found with this id.' });
      return;
    }
    res.json(singleWalkerData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//POST api/walkers creating a walker info and ingest into the db. I didn't specified req.body to key: value pair. will tweak as needed.
router.post('/', async (req, res) => {
  try {
    const newWalkerData = await Walker.create(req.body);
    res.json(newWalkerData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// POST api/walkers/login route. looking for username and password in the db and verify it. current constraint explained in owner-routes.js.
router.post('/login', async (req, res) => {
  try {
    const walkerUserNameData = await Owner.findOne({
      where: { email: req.body.email },
    });
    if (!walkerUserNameData) {
      res.status(400).json({ message: 'No dog walker with that email!' });
      return;
    }
    // verify the user using checkPassword method defined in Owner model.
    const validPassword = walkerUserNameData.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message: 'Invalid password. Try again' });
      return;
    }
    req.session.save(() => {
      req.session.user_id = walkerUserNameData.id;
      req.session.username = walkerUserNameData.username;
      req.session.walkerLogin = true;
      res.json({
        user: walkerUserNameData,
        message: `${walkerUserNameData.owner_name}, you are now logged in!`,
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// PUT api/walkers/:id updating a walker's info based on its id.
router.put('/:id', async (req, res) => {
  try {
    const previousWalkerData = await Walker.update(req.body, {
      where: { id: req.params.id },
    });
    if (!previousWalkerData) {
      res.status(404).json({ message: 'No dog walker found with this id.' });
      return;
    }
    res.json(previousWalkerData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// DELETE api/walkers/:id single walker by id gets deleted in the db.
router.delete('/:id', async (req, res) => {
  try {
    const singleWalkerData = await Walker.destroy({
      where: { id: req.params.id },
    });
    if (!singleWalkerData) {
      res.status(404).json({ message: 'No dog walker found with this id.' });
      return;
    }
    res.json(singleWalkerData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
