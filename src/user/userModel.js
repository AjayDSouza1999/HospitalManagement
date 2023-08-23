var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({

    name : {
        type: String,
        //required: true
    },
    address: {
        type: String,
        //required: true
    },
    speciality: {
        type: String,
       // required: true
    },
    education:{ //5
        type: String,
        //required: true
    },
    phoneNo:{
        type: String,
        //required: true
    },
    email:{
        type: String,
        //required: true
    },
    gender: {
        type: String,
       // required: true
    },
    status:{
        type: String,
        //required: true
    },
    weekday:{
        type: String,
        //required: true
    },
    weekdaySlot:{
        type: String,
        //required: true
    },
    weekend:{  //12
        type: String,
        //required: true
    },
    weekendSlot:{
        type: String,
        //required: true
    },
    createdBy:{
        type: String,
        //required: true
    },
    updatedBy:{
        type: String,
        //required: true
    },
    numberOfAppointments:{
        type: String,
        //required: true
    },

});

module.exports = mongoose.model('hospital',userSchema);