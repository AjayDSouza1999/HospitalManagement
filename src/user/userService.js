var userModel = require("./userModel");

module.exports.getDataFromDBService = () => {
  return new Promise(function (resolve, reject) {
    userModel
      .find({})
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

module.exports.createUserDBService = (userDetails) => {
  return new Promise(function myFn(resolve, reject) {
    // Search for employee ID before saving
    userModel
      .findOne({ employeeId: userDetails.employeeId })
      .then((existingEmployee) => {
        // if (existingEmployee) {
        //   reject(new Error("Employee ID already exists. Cannot submit."));
        // } else {
          var userModelData = new userModel();

          userModelData.name = userDetails.name;
          userModelData.address = userDetails.address;
          userModelData.speciality = userDetails.speciality;
          userModelData.education = userDetails.education;
          userModelData.phoneNo = userDetails.phoneNo;

          userModelData.email = userDetails.email;
          userModelData.gender = userDetails.gender;
          userModelData.status = userDetails.status;
          userModelData.weekday = userDetails.weekday;
          userModelData.weekdaySlot = userDetails.weekdaySlot;

          userModelData.weekend = userDetails.weekend;
          userModelData.weekendSlot = userDetails.weekendSlot;
          userModelData.createdBy = userDetails.createdBy;
          userModelData.updatedBy = userDetails.updatedBy;
          userModelData.numberOfAppointments = userDetails.numberOfAppointments;



          userModelData
            .save()
            .then((result) => {
              resolve(true);
            })
            .catch((error) => {
              reject(false);
            });
       // }
      })
      .catch((error) => {
        reject(false);
      });
  });
};

module.exports.updateUserDBService = (employeeId, userDetails) => {
  return new Promise((resolve, reject) => {
    userModel
      .findOneAndUpdate({ employeeId }, userDetails, {
        useFindAndModify: false,
      })
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

module.exports.removeUserDBService = (employeeId) => {
  return new Promise(function (resolve, reject) {
    userModel
      .findOneAndDelete({ employeeId })
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

module.exports.getEmployeeByIdDBService = (employeeId) => {
  return new Promise(function (resolve, reject) {
    userModel
      .findOne({ employeeId })
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
