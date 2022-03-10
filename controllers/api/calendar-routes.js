const router = require('express').Router();
const { Dog, Owner, Calendar, Walker } = require('../../models');

/*because calendar routes are a through table for dog and walker 
it's important to pull all data we can so that's why it looks
like a lot of code initially
*/
router.get('/', async (req, res) => {
  try {
    const allCalendarData = await Calendar.findAll({
      include: [
        {
          model: Walker,
          attributes: [
            'id',
            'walker_name',
            'email',
            'phone',
            'hourly_rate',
            'profile_pic',
          ],
        },
        {
          model: Dog,
          attributes: ['id', 'dog_name'],
          include: [
            {
              model: Owner,
              attributes: [
                'id',
                'owner_name',
                'email',
                'address',
                'phone',
                'profile_pic',
              ],
            },
          ],
        },
      ],
    });
    res.json(allCalendarData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const newCalendarData = await Calendar.create(req.body);
    res.json(newCalendarData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const prevCalendarData = await Calendar.update(req.body, {
      where: { id: req.params.id },
    });
    if (!prevCalendarData) {
      res.status(404).json({
        message: "We're sorry, but we could not locate your appointment",
      });
      return;
    }
    res.json(prevCalendarData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const removeCalendarData = await Calendar.destroy({
      where: { id: req.params.id },
    });
    if (!removeCalendarData) {
      res.status(404).json({
        message: "We're sorry, but we could not locate your appointment",
      });
      return;
    }
    res.json(removeCalendarData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/schedule', async (req, res) => {
  try {
    /*when setting up an appointment we need to pull
    only events that are without dogs so that's we
    Select * from calendar where dog_id IS NULL;
    */
    const calendarAvailable = await Calendar.findAll({
      where: { dog_id: null },
      include: {
        model: Walker,
      },
    });
    res.json(calendarAvailable);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const calendarDelete = await Calendar.destroy({
      where: {
        walker_id: req.params.id,
      },
    });
    res.json(calendarDelete);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
