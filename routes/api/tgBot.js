const express = require('express');
const {listDataUsers, addDataUsers, findTraineeUsers} = require('../../controllers/tgBot');
const router = express.Router();

router.get('/', listDataUsers);
router.post('/', addDataUsers);
router.put('/', findTraineeUsers);

module.exports = router;
