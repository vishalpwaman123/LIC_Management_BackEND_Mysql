// const pool = require("../../config/database");

// module.exports = {
//   // create method pass data and callback parameter
//   create: (data, callBack) => {
//     pool.query(
//       "insert into registration(firstName, lastName, gender, email, password, mobile) values(?,?,?,?,?,?)",
//       [
//         data.first_name,
//         data.last_name,
//         data.gender,
//         data.email,
//         data.password,
//         data.mobile,
//       ],
//       (error, results, fields) => {
//         if (error) {
//           return callBack(error);
//         }
//         return callBack(null, results);
//       }
//     );
//   },

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
// };
