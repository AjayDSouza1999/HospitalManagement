var userService = require("./userService");

var getDataConntrollerfn = async (req, res) => {
  var empolyee = await userService.getDataFromDBService();
  res.send({ status: true, data: empolyee });
};

// var createUserControllerFn = async (req, res) => {
//   var status = await userService.createUserDBService(req.body);
//   if (status) {
//     res.send({ status: true, message: "User created successfully" });
//   } else {
//     res.send({ status: false, message: "Error creating user" });
//   }
// };
var createUserControllerFn = async (req, res) => {
  try {
    await userService.createUserDBService(req.body);
    res.send({ status: true, message: "User created successfully" });
  } catch (error) {
    res.send({ status: false, message: error.message });
  }
};


var updateUserController = async (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  console.log("in update");
  var result = await userService.updateUserDBService(req.params.id, req.body);

  if (result) {
    res.send({ status: true, message: "User Updated" });
  } else {
    res.send({ status: false, message: "User Update Failed" });
  }
};

var deleteUserController = async (req, res) => {
  var result = await userService.removeUserDBService(req.params.id);
  if (result) {
    res.send({ status: true, message: "User Deleteddd" });
  } else {
    res.send({ status: false, message: "User Deleteddd Faileddddddd" });
  }
};

var getEmployeeByIdController = async (req, res) => {
  try {
    var employeeId = req.params.id;
    var result = await userService.getEmployeeByIdDBService(employeeId);
    if (result) {
      res.send({ status: true, data: result });
    } else {
      res.send({ status: false, message: "Employee not found" });
    }
  } catch (error) {
    res.status(500).send({ status: false, message: "Internal server error" });
  }
};

module.exports = {
  getDataConntrollerfn,
  createUserControllerFn,
  updateUserController,
  deleteUserController,
  getEmployeeByIdController,
};
