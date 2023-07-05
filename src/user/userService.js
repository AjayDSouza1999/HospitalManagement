var userModel = require("./userModel");

module.exports.getDataFromDBService = () => {
    return new Promise(function(resolve, reject) {
      userModel.find({})
        .then(result => {
          resolve(result);
        })
        .catch(error => {
          reject(error);
        });
    });
  };
  


module.exports.createUserDBService = (userDetails) => {
    return new Promise(function myFn(resolve, reject) {
      var userModelData = new userModel();
  
      userModelData.employeeId = userDetails.employeeId;
      userModelData.firstName = userDetails.firstName;
      userModelData.lastName = userDetails.lastName;
      userModelData.department = userDetails.department;
      userModelData.mobileNo = userDetails.mobileNo;
      userModelData.emailId = userDetails.emailId;
      userModelData.address = userDetails.address;
  
      userModelData
        .save()
        .then((result) => {
          resolve(true);
        })
        .catch((error) => {
          reject(false);
        });
    });
  };
  
  module.exports.updateUserDBService = (employeeId, userDetails) => {
    return new Promise((resolve, reject) => {
      userModel.findOneAndUpdate({ employeeId }, userDetails, { useFindAndModify: false })
        .then(result => {
          resolve(result);
        })
        .catch(error => {
          reject(error);
        });
    });
  };
  
  

module.exports.removeUserDBService = (employeeId) => {
    return new Promise(function(resolve, reject) {
      userModel.findOneAndDelete({ employeeId })
        .then(result => {
          resolve(result);
        })
        .catch(error => {
          reject(error);
        });
    });
  };

  module.exports.getEmployeeByIdDBService = (employeeId) => {
    return new Promise(function(resolve, reject) {
      userModel.findOne({ employeeId })
        .then(result => {
          resolve(result);
        })
        .catch(error => {
          reject(error);
        });
    });
  };
  
  