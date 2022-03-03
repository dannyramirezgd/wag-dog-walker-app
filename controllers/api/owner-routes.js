const router = require('express').Router();
const { Dog, Walker, Owner } = require('../../models');

// GET /api/owners all the owners information.
router.get('/', async (req, res) => {
  try {
    const allOwnerData = await Owner.findAll({
      include: [
        {
          model: Dog,
          attributes: ['dog_name'],
          include: {
            model: Walker,
            attributes: ['walker_name', 'email', 'phone', 'hourly_rate'],
          },
        },
      ],
    });
    // responding in json format.
    res.json(allOwnerData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET /api/owners/:id single owner info based on its id.
router.get('/:id', async (req, res) => {
  try {
    const singleOwnerData = await Owner.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: Dog,
          attributes: ['dog_name'],
          include: {
            model: Walker,
            attributes: ['walker_name', 'email', 'phone', 'hourly_rate'],
          },
        },
      ],
    });
    if (!singleOwnerData) {
      res.status(404).json({ message: 'No dog owner found with this id.' });
      return;
    }
    res.json(singleOwnerData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//POST api/owners creating a owner info and ingest into the db. I didn't specified req.body to key: value pair. will tweak as needed.
router.post('/', async (req, res) => {
  try {
    const newOwnerData = await Owner.create(req.body);
    res.json(newOwnerData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const ownerUserNameData = await Owner.findOne({
      where: { email: req.body.email },
    });
    if (!ownerUserNameData) {
      res.status(400).json({ message: 'No dog owner with that email!' });
      return;
    }
    // verify the user using checkPassword method defined in Owner model.
    const validPassword = ownerUserNameData.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message: 'Invalid password. Try again' });
      return;
    }
    req.session.save(() => {
      req.session.user_id = ownerUserNameData.id;
      req.session.loggedIn = true;
      res.json({
        user: ownerUserNameData,
        message: `${ownerUserNameData.owner_name}, you are now logged in!`,
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// PUT api/owners/:id updating a owner's info based on its id.
router.put('/:id', async (req, res) => {
  try {
    const previousOwnerData = await Owner.update(req.body, {
      where: { id: req.params.id },
    });
    if (!previousOwnerData) {
      res.status(404).json({ message: 'No dog owner found with this id.' });
      return;
    }
    res.json(previousOwnerData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// DELETE api/owners/:id single owner by id gets deleted in the db.
router.delete('/:id', async (req, res) => {
  try {
    const singleOwnerData = await Owner.destroy({
      where: { id: req.params.id },
    });
    if (!singleOwnerData) {
      res.status(404).json({ message: 'No dog owner found with this id.' });
      return;
    }
    res.json(singleOwnerData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
