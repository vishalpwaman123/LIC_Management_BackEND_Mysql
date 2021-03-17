// const {
//   create,
//   getUsers,
//   getUsersById,
//   updateUser,
//   deleteUser,
// } = require("./user.service");

// const { genSaltSync, hashSync } = require("bcrypt");

// module.exports = {
//   //createUser Is Controller
//   createUser: (req, res) => {
//     const body = req.body;
//     const salt = genSaltSync(10); //
//     body.password = hashSync(body.password, salt); //Craete Hash encreption password

//     create(body, (err, results) => {
//       if (err) {
//         console.log(err);
//         return res.status(500).json({
//           success: 0,
//           message: "Database Connection error",
//         });
//       }

//       return res.status(200).json({
//         success: 1,
//         data: results,
//       });
//     });
//   },

//   getUsers: (req, res) => {
//     getUsers((err, results) => {
//       if (err) {
//         console.log(err);
//         return res.status(500).json({
//           success: 0,
//           message: "Database Connection error",
//         });
//       }
//       return res.status(200).json({
//         success: 1,
//         data: results,
//       });
//     });
//   },

//   getUserById: (req, res) => {
//     const id = req.params.id;
//     getUsersById(id, (err, results) => {
//       if (err) {
//         console.log(err);
//         return res.status(500).json({
//           success: 0,
//           message: "Database Connection error",
//         });
//       }
//       return res.status(200).json({
//         success: 1,
//         data: results,
//       });
//     });
//   },

//   updateUser: (req, res) => {
//     const data = req.body;
//     const salt = genSaltSync(10); //
//     data.password = hashSync(data.password, salt); //Craete Hash encreption password

//     updateUser(data, (err, results) => {
//       if (err) {
//         console.log(err);
//         return res.status(500).json({
//           success: 0,
//           message: "Database Connection error",
//         });
//       }
//       return res.status(200).json({
//         success: 1,
//         data: results,
//       });
//     });
//   },

//   deleteUser: (req, res) => {
//     const id = req.params.id;
//     deleteUser(id, (err, results) => {
//       if (err) {
//         console.log(err);
//         return res.status(500).json({
//           success: 0,
//           message: "Database Connection error",
//         });
//       }
//       return res.status(200).json({
//         success: 1,
//         data: results,
//       });
//     });
//   },
// };
