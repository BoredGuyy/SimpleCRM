const express = require('express')
const router = express.Router()

const {getFacture_product, getOneProduct_facture, createFacture_product, updateFacture_product, deleteFacture_product} = require('../controllers/facture_productController')

router.route('/').get(getFacture_product).post(createFacture_product)
router.route('/:ID').get(getOneProduct_facture).put(updateFacture_product).delete(deleteFacture_product)

module.exports = router