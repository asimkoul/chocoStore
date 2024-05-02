const express=require('express')
const router=express.Router()

const controller=require('../controllers/admin')

router.post('/store',controller.postStore)
router.get('/store',controller.getStore)
router.delete('/store/:id',controller.deleteStore);
router.get('/store/:id',controller.getBuyStore);
//router.put('/store/:id',controller.postBuyStore);


module.exports=router