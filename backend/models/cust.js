const mongoose=require('mongoose');


const Schema = mongoose.Schema;

let CustomerDetails = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    favouritebars:{
        type:[String]
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    contactnumber: {
        type:  Number
    }
});

const Cust=mongoose.model('CustomerDetails',CustomerDetails);
module.exports=Cust;
