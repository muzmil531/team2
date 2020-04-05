const express=require('express');
const router =  express.Router();

const ctrlAdmin=require('../cotrollers/admin.controller');

router.post('/adminregister',ctrlAdmin.register);

module.exports=router;
