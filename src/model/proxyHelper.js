// const fs = require("fs");
// const path = require("path");
// const database = require(path.resolve(__dirname, "databaseModel.js"));
// const gc = require(path.resolve(__dirname, "vps", "gc", "gc.js"));
// const gcHelper = require(path.resolve(__dirname, "vps", "gc", "gcHelper.js"));
// const aws = require(path.resolve(__dirname, "vps", "aws", "aws.js"));

// proxiesHelper = {};

// /**
//  * Returns a list
//  */
// proxiesHelper.getAllProxies = function(callback) {
//   database.findValues("type", "proxy", proxies => {
//     return callback(proxies);
//   });
// };

// /**
//  * Adds proxy to the database
//  */
// proxiesHelper.addProxy = function(
//   ip,
//   VPS,
//   instanceName,
//   zone,
//   username,
//   password,
//   instanceID = "",
//   callback
// ) {
//   let newProxy = {
//     type: "proxy",
//     vps: VPS,
//     instanceName: instanceName,
//     zone: zone,
//     value: ip,
//     username: username,
//     password: password,
//     instanceID: instanceID
//   };
//   database.insert(newProxy, result => {});
// };

// proxiesHelper.clearAllProxies = function() {
//   database.remove("type", "proxy", result => {});
// };

// proxiesHelper.deleteProxy = function(proxyName, callback) {
//   //Finds the proxy in the database
//   database.find("instanceName", proxyName, proxy => {
//     database.remove("instanceName", proxyName, result => {
//       if (proxy.vps == "google-cloud") {
//         gcHelper.modifyEnvFile(proxy.zone, result => {
//           gc.deleteVM(proxyName, (error, name) => {
//             return callback(error, name);
//           });
//         });
//       } else if (proxy.vps == "aws") {
//         aws.deleteProxy(proxy.instanceID, (error, result) => {
//           return callback(error, result);
//         });
//       }
//     });
//   });
// };

// //Deleting AWS is different since it requires
// proxiesHelper.deleteAWSProxy = function(proxyName, callback) {
//   database.find("instanceName", proxyName, worker => {
//     database.remove("instanceName", proxyName, result => {});
//   });
// };
// module.exports = proxiesHelper;
