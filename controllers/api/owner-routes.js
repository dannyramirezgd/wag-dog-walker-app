const router = require('express').Router();
const { Dog, Walker, Owner } = require('../../models');

// GET /api/owners all the owners information.
router.get('/', async (req, res) => {
  try {
    const allOwnerData = await Owner.findAll({
      include: [
        Dog,
        {
          model: Walker,
          attribute: { exclude: ['password'] },
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
        Dog,
        {
          model: Walker,
          attributes: { exclude: ['password'] },
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

// POST api/owners/login route requires.

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
