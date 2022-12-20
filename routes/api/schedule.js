const express = require('express');
const {listDataView, addData, findTrainee} = require('../../controllers/controlles');
const router = express.Router();

router.get('/', listDataView);
router.post('/', addData);
router.put('/', findTrainee);

module.exports = router;
