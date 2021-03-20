const {
  registration,
  login,
  getUsersById,
  forgetPassword,
  resetPassword,
  addUserdetail,
  deleteAllData,
} = require("./user.service");

const { genSaltSync, hashSync } = require("bcrypt");

console.log("controller Class");

module.exports = {
  //createUser Is Controller
  registration: (req, res) => {
    const body = req.body;
    // const salt = genSaltSync(10); //
    // body.password = hashSync(body.password, salt); //Craete Hash encreption password
    console.log("Controller flag 1");
    registration(body, (err, results) => {
      if (err) {
        console.log("Controller flag 2");
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database Connection error",
        });
      }
      console.log("Controller flag 3");
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },

  login: (req, res) => {
    const body = req.body;
    // const salt = genSaltSync(10); //
    // body.password = hashSync(body.password, salt); //Craete Hash encreption password
    console.log(
      "User Controller flag 1",
      body.email,
      body.password,
      body.account_Type
    );
    login(body, (err, results) => {
      if (err) {
        console.log("Controller flag 2");
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database Connection error",
        });
      } else if (results == "") {
        console.log("Controller result null");
        return res.status(400).json({
          success: 0,
          message: "Bad Request",
        });
      }
      console.log("Controller flag 3");
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },

  getUsersById: (req, res) => {
    const body = req.body;
    // const salt = genSaltSync(10); //
    // body.password = hashSync(body.password, salt); //Craete Hash encreption password
    console.log("User Controller flag 1", body.id);
    getUsersById(body, (err, results) => {
      if (err) {
        console.log("Controller flag 2");
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database Connection error",
        });
      } else if (results == "") {
        console.log("Controller result null");
        return res.status(400).json({
          success: 0,
          message: "Bad Request",
        });
      }
      console.log("Controller flag 3");
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },

  forgetPassword: (req, res) => {
    const body = req.body;
    // const salt = genSaltSync(10); //
    // body.password = hashSync(body.password, salt); //Craete Hash encreption password
    console.log("User Controller flag 1", body.id);
    forgetPassword(body, (err, results) => {
      if (err) {
        console.log("Controller flag 2");
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database Connection error",
        });
      } else if (results == "") {
        console.log("Controller result null");
        return res.status(400).json({
          success: 0,
          message: "Bad Request",
        });
      }
      console.log("Controller flag 3");
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },

  resetPassword: (req, res) => {
    const body = req.body;
    // const salt = genSaltSync(10); //
    // body.password = hashSync(body.password, salt); //Craete Hash encreption password
    console.log("User Controller flag 1", body.customer_id);
    resetPassword(body, (err, results) => {
      if (err) {
        console.log("Controller flag 2");
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database Connection error",
        });
      } else if (results == "") {
        console.log("Controller result null");
        return res.status(400).json({
          success: 0,
          message: "Bad Request",
        });
      }
      console.log("Controller flag 3");
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },

  addUserdetail: (req, res) => {
    const body = req.body;
    // const salt = genSaltSync(10); //
    // body.password = hashSync(body.password, salt); //Craete Hash encreption password
    console.log("User Controller flag 1", body.customer_id);
    addUserdetail(body, (err, results) => {
      if (err) {
        console.log("Controller flag 2");
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database Connection error",
        });
      } else if (results == "") {
        console.log("Controller result null");
        return res.status(400).json({
          success: 0,
          message: "Bad Request",
        });
      }
      console.log("Controller flag 3");
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },

  deleteAllData: (req, res) => {
    const body = req.body;
    // const salt = genSaltSync(10); //
    // body.password = hashSync(body.password, salt); //Craete Hash encreption password
    console.log("User Controller flag 1");
    deleteAllData(body, (err, results) => {
      if (err) {
        console.log("Controller flag 2");
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database Connection error",
        });
      } else if (results == "") {
        console.log("Controller result null");
        return res.status(400).json({
          success: 0,
          message: "Bad Request",
        });
      }
      console.log("Controller flag 3");
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
};
