const pool = require("../../config/database");
var datetime = new Date();

console.log("Services Class");

module.exports = {
  // create method pass data and callback parameter
  registration: (data, callBack) => {
    pool.query(
      "insert into registration(email, password, created_Date, account_Type) values(?,?,?,?)",
      [data.email, data.password, datetime, data.account_Type],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  login: (data, callBack) => {
    pool.query(
      "select customer_id from registration where email = ? and password = ? and account_Type = ?",
      [data.email, data.password, data.account_Type],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        } else if (results == "") {
          console.log("result null", results);
          return callBack(error, results);
        }
        console.log(results);
        return callBack(null, results);
      }
    );
  },

  getUsersById: (data, callBack) => {
    pool.query(
      "select * from registration where customer_id = ?",
      [data.id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        } else if (results == "") {
          console.log("result null", results);
          return callBack(error, results);
        }
        console.log(results);
        return callBack(null, results);
      }
    );
  },

  forgetPassword: (data, callBack) => {
    pool.query(
      "select * from registration where email = ?",
      [data.email],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        } else if (results == "") {
          console.log("result null", results);
          return callBack(error, results);
        }
        console.log(results);
        return callBack(null, results);
      }
    );
  },

  resetPassword: (data, callBack) => {
    pool.query(
      "update registration set password = ? where customer_id = ?",
      [data.password, data.customer_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        } else if (results == "") {
          console.log("result null", results);
          return callBack(error, results);
        }
        console.log(results);
        return callBack(null, results);
      }
    );
  },

  addUserdetail: (data, callBack) => {
    pool.query(
      "update registration set customer_Name = ?, age = ?, gender = ?, qualification=?, address =?, occupation = ?  where customer_id = ?",
      [
        data.customer_Name,
        data.age,
        data.gender,
        data.qualification,
        data.address,
        data.occupation,
        data.customer_id,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        } else if (results == "") {
          console.log("result null", results);
          return callBack(error, results);
        }
        console.log(results);
        return callBack(null, results);
      }
    );
  },

  deleteAllData : (data, callBack) => {
    pool.query(
      "delete from registration",
      [
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        } else if (results == "") {
          console.log("result null", results);
          return callBack(error, results);
        }
        console.log(results);
        return callBack(null, results);
      }
    );
  },
};
