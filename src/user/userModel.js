var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({

    employeeId: {
        type: String,
        //required: true
    },
    firstName: {
        type: String,
        //required: true
    },
    lastName: {
        type: String,
       // required: true
    },
    department:{
        type: String,
        //required: true
    },
    mobileNo:{
        type: String,
        //required: true
    },
    emailId:{
        type: String,
        //required: true
    },
    address:{
        type: String,
        //required: true
    },

});

module.exports = mongoose.model('employeesData',userSchema);