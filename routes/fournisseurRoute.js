const express = require('express')
const router = express.Router()
const {getFournisseur, getOneFournisseur, createFournisseur, updateFournisseur, deleteFournisseur} = require('../controllers/fournisseurController')

router.route('/').get(getFournisseur).post(createFournisseur)
router.route('/:ID').get(getOneFournisseur).put(updateFournisseur).delete(deleteFournisseur)

module.exports = router