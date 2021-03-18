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
  //   getUsers: (callBack) => {
  //     pool.query("select * from registration", [], (error, results, fields) => {
  //       if (error) {
  //         return callBack(error);
  //       }
  //       return callBack(null, results);
  //     });
  //   },
  //   getUsersById: (id, callBack) => {
  //     pool.query(
  //       "select * from registration where id = ?",
  //       [id],
  //       (error, results, fields) => {
  //         if (error) {
  //           return callBack(error);
  //         }
  //         return callBack(null, results[0]);
  //       }
  //     );
  //   },
  //   updateUser: (data, callBack) => {
  //     pool.query(
  //       "update registration set firstName=?, lastName=?, gender=?, email=?, password=?, mobile=? where id=?",
  //       [
  //         data.first_name,
  //         data.last_name,
  //         data.gender,
  //         data.email,
  //         data.password,
  //         data.mobile,
  //         data.id,
  //       ],
  //       (error, results, fields) => {
  //         if (error) {
  //           return callBack(error);
  //         }
  //         return callBack(null, results[0]);
  //       }
  //     );
  //   },
  //   deleteUser: (id, callBack) => {
  //     pool.query(
  //       "delete from registration where id=?",
  //       [id],
  //       (error, results, fields) => {
  //         if (error) {
  //           return callBack(error);
  //         }
  //         return callBack(null, results[0]);
  //       }
  //     );
  //   },
};
