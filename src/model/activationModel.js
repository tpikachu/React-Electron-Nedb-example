// const crypto = require("crypto");
// const request = require("request");
// const path = require('path');
// const databaseModel = require(path.resolve(__dirname, "databaseModel.js"));

// const activationModel = {};
// const licenseCheckPage =
//   "https://calm-savannah-11416.herokuapp.com/license_check";

// /**
//  * Gets the fingerprint of the user machine
//  */
// activationModel.getFingerprint = function(callback) {
//   require("getmac").getMac((err, macAddress) => {
//     return callback(
//       crypto
//         .createHash("sha256")
//         .update(macAddress)
//         .digest("hex")
//     );
//   });
// };

// /**
//  * Makes a request to the licesne server and checks if the key is valid or not.
//  * The response will be a object that's key is either "ERROR" or "SUCCESS"
//  */
// activationModel.checkLicense = function(key, callback) {
//   activationModel.getFingerprint(fingerprint => {
//     // let data = {
//     //   activationKey: key,
//     //   machineKey: fingerprint
//     // };
//     //needs to be changed later so it just passes the data json as a params
//     request.post(
//       {
//         url:
//           licenseCheckPage +
//           "?" +
//           "activationKey=" +
//           key +
//           "&" +
//           "machineKey=" +
//           fingerprint
//       },
//       (error, res, body) => {
//         if (error) {
//           return callback(null);
//         }

//         return callback(body);
//       }
//     );
//   });
// };

// /**
//  * Check the database if the key exists, if not then add the key
//  * if it does exist, return the key
//  * (?) might not be updating the keys properly..?
//  */
// activationModel.updateOrAddLicense = function(key, callback) {
//   databaseModel.find("key", "activationKey", result => {
//     //if the activationKey is not found, then add it
//     if (!result) {
//       let keyData = {
//         key: "activationKey",
//         value: key
//       };
//       databaseModel.insert(keyData, doc => {
//         return callback(key);
//       });
//     } else {
//       //the key is found then update it.
//       databaseModel.update("key", "activationKey", "value", key, result => {});
//     }
//   });
// };

// activationModel.getKey = function(callback) {
//   databaseModel.find("key", "activationKey", result => {
//     if (result != null) {
//       return callback(result.value);
//     } else {
//       return callback(null);
//     }
//   });
// };

// module.exports = activationModel;
