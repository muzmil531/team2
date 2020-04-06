const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const Issue=new Schema({
    title:String,
    resposible:String,
    description:String,
    severity:String,
    status:String
});

const Admin=mongoose.model('Issue',Issue);
module.exports=Admin;