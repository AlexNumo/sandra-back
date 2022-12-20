const express = require('express');
const {
  listClient,
  addClient,
  deleteClient
  } = require('../../controllers/client');
const router = express.Router();

router.get('/', listClient);
router.post('/', addClient);
router.put('/', deleteClient);

module.exports = router;
