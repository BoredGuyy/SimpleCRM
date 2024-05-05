const express = require('express')
const {addClient, showClients, getOneClient, updateClient, deleteClient} = require('../controllers/clientController')
const router = express.Router()

router.route('/').post(addClient).get(showClients)
router.route('/:ID').get(getOneClient).put(updateClient).delete(deleteClient)

module.exports = router