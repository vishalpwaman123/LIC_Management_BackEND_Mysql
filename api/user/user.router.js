const {
  registration,
  login,
  getUsersById,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("./user.controller"); // import user controller

const router = require("express").Router(); //Create Router object
console.log("Router Class");

router.post("/registration", registration); //POST API
router.post("/login", login); //POST API
// router.get("/getUsers", getUsers);  //GET API
router.post("/getUsersById", getUsersById); //GET API BY ID

// router.put("/updateUser", updateUser); // PUT API
// router.delete("/deleteUser/:id", deleteUser); //DELETE API BY ID

module.exports = router;
