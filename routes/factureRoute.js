const express = require('express')
const router = express.Router()

const {getFacture, getOneFacture, createFacture, updateFacture, deleteFacture} = require('../controllers/factueController')

router.route('/').get(getFacture).post(createFacture)
router.route('/:ID').get(getOneFacture).put(updateFacture).delete(deleteFacture)

module.exports = router