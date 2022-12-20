const express = require('express');
const {
  listCoach,
  addCoach,
  deleteCoach
  } = require('../../controllers/coach');
const router = express.Router();

router.get('/', listCoach);
router.post('/', addCoach);
router.put('/', deleteCoach);

module.exports = router;
