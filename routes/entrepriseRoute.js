const express = require('express')
const {getEntreprises, getOneEntreprise, createEntreprise, updateEntreprise, deleteEntreprise} = require('../controllers/entrepriseController')
const router = express.Router();

router.route('/').get(getEntreprises).post(createEntreprise)
router.route('/:ID').get(getOneEntreprise).put(updateEntreprise).delete(deleteEntreprise)

module.exports = router;