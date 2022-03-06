const router = require('express').Router();
const { Dog, Walker, Owner, Calendar } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const allCalendarData = await Calendar.findAll({
      include: [
        {
          model: Walker,
          attributes: ['walker_name', 'email', 'phone'],
        },
        {
          model: Dog,
          attributes: ['dog_name', 'size'],
          include: {
            model: Owner,
            attributes: ['owner_name', 'email', 'phone'],
          },
        },
      ],
    });
    res.json(allCalendarData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
