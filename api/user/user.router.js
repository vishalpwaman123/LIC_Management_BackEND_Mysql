const {
  registration,
  login,
  getUsersById,
  forgetPassword,
  resetPassword,
  addUserdetail,
  deleteAllData,
} = require("./user.controller"); // import user controller

const router = require("express").Router(); //Create Router object
console.log("Router Class");

router.post("/registration", registration); //POST API
router.post("/login", login); //POST API
router.post("/forgetPassword", forgetPassword); //POST API
router.patch("/resetPassword", resetPassword); //
router.patch("/addUserdetail", addUserdetail); //
router.post("/getUsersById", getUsersById); //GET API BY ID
router.delete("/deleteAllData", deleteAllData); //GET API BY ID

module.exports = router;
