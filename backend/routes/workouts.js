const express = require('express');
const Workout = require('../models/workoutModel');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'GET all workouts' })
});

router.get('/:id', (req, res) => {
  res.json({ message: 'GET workout by id' })
});

router.post('/', async (req, res) => {
  const { title, load, reps } = req.body;

  try {
    const workout = await Workout.create({ title, reps, load });

    res.status(200).json(workout);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
})

router.delete('/:id', (req, res) => {
  res.json({ message: 'DELETE a workout'})
})

router.patch('/:id', (req, res) => {
  res.json({ message: 'UPDATE a workout'})
})

module.exports = router;