const express = require('express')
const { addTransection, getALLTransection,editTransection,deleteTransection } = require('../controller/transectionCtrl')

//router object
const router = express.Router()

//routes
//add tarnsections
router.post('/add-transection',addTransection)

//edit transection
router.put('/edit-transection',editTransection)

//delete transection
router.delete('/delete-transection',deleteTransection)

//get transection
router.post('/get-transection',getALLTransection)

module.exports = router