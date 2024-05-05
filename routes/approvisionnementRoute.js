const express = require('express')
const { addapprovisionnement, showApprovisionnement, getOneApprovisionnement, updateApprovisionnement, deleteApprovisionnement } = require('../controllers/approvisionnementController')
const router = express.Router()

router.route('/').post(addapprovisionnement).get(showApprovisionnement)
router.route('/:ID').get(getOneApprovisionnement).put(updateApprovisionnement).delete(deleteApprovisionnement)

module.exports = router