const router = require('express').Router();
const { Dog, Walker, Owner, Calendar } = require('../../models');

// GET /api/dogs all the dogs information.
router.get('/', async (req, res) => {
  try {
    const allDogData = await Dog.findAll({
      include: [
        {
          model: Owner,
          attributes: ['owner_name', 'email', 'address', 'phone'],
        },
        {
          model: Calendar,
          attributes: ['day', 'time'],
          include: {
            model: Walker,
            attributes: ['walker_name', 'email', 'phone'],
          },
        },
      ],
    });
    // responding in json format.
    res.json(allDogData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET /api/dogs/:id single dog info based on its id.
router.get('/:id', async (req, res) => {
  try {
    const singleDogData = await Dog.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: Owner,
          attributes: ['owner_name', 'email', 'address', 'phone'],
        },
        {
          model: Calendar,
          attributes: ['day', 'time'],
          include: {
            model: Walker,
            attributes: ['walker_name', 'email', 'phone'],
          },
        },
      ],
    });
    if (!singleDogData) {
      res.status(404).json({ message: 'No dog found with this id.' });
      return;
    }
    res.json(singleDogData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// POST api/dogs creating a dog info and ingest into the db. I didn't specified req.body to key: value pair. will tweak as needed.
router.post('/', async (req, res) => {
  try {
    const newDogData = await Dog.create(req.body);
    res.json(newDogData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// PUT api/dogs/:id updating a dog's info based on its id.
router.put('/:id', async (req, res) => {
  try {
    const previousDogData = await Dog.update(req.body, {
      where: { id: req.params.id },
    });
    if (!previousDogData) {
      res.status(404).json({ message: 'No dog found with this id.' });
      return;
    }
    res.json(previousDogData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// DELETE api/dogs/:id single dog by id gets deleted in the db.
router.delete('/:id', async (req, res) => {
  try {
    const singleDogData = await Dog.destroy({ where: { id: req.params.id } });
    if (!singleDogData) {
      res.status(404).json({ message: 'No dog found with this id.' });
      return;
    }
    res.json(singleDogData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
