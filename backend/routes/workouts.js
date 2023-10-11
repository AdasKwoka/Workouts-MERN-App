const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'GET all workouts' })
});

router.get('/:id', (req, res) => {
  res.json({ message: 'GET workout by id' })
});

router.post('/', (req, res) => {
  res.json({ message: 'POST new workout'})
})

router.delete('/:id', (req, res) => {
  res.json({ message: 'DELETE a workout'})
})

router.patch('/:id', (req, res) => {
  res.json({ message: 'UPDATE a workout'})
})

module.exports = router;