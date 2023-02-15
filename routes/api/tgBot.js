const express = require('express');
const {listDataUsers, addDataUsers, changeVisitTraineeOfUsers} = require('../../controllers/tgBot');
const router = express.Router();

router.get('/', listDataUsers);
router.post('/', addDataUsers);
router.put('/visit', changeVisitTraineeOfUsers);

module.exports = router;
