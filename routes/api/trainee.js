const express = require('express');
const {
  listTrainee,
  addTrainee,
  deleteTrainee
  } = require('../../controllers/trainee');
const router = express.Router();

router.get('/', listTrainee);
router.post('/', addTrainee);
router.put('/', deleteTrainee);

module.exports = router;