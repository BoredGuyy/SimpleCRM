const express = require('express')
const router = express.Router()

const {getProduct, getOneProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/productController')

router.route('/').get(getProduct).post(createProduct)
router.route('/:ID').get(getOneProduct).put(updateProduct).delete(deleteProduct)

module.exports = router