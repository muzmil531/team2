const mongoose=require('mongoose');


const Schema = mongoose.Schema;

let CoffeeBarRecords = new Schema({
    name: {
        type: String
    },
    gstnumber: {
        type: String
    },
    description: {
        type: String
    },
    latittude: {
        type: String
    },
    longitude: {
        type: String
    },
    rating: {
        type: String
    },
    review: {
        type: [String]
    },
    timing: {
        type: String
    },
    totalitems: {
        type: String
    },
    specialitems: {
        type: String
    },
    facilities: {
        type: String
    },
    contactnumber: {
        type:  Number
    },    
    email: {
        type: String
    },
    status: {
        type: String,
        default: 'Open'
    }
});

const Admin=mongoose.model('CoffeeBarRecords',CoffeeBarRecords);
module.exports=Admin;
