const express = require('express');
const {
  listKindTrainee,
  addKindTrainee,
  deleteKindTrainee
  } = require('../../controllers/kind-trainee');
const router = express.Router();

router.get('/', listKindTrainee);
router.post('/', addKindTrainee);
router.put('/', deleteKindTrainee);

module.exports = router;
