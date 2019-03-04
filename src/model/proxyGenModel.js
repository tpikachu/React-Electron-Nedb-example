// // const gc = require('./vps/gc.js');
// const path = require("path");
// const gc = require(path.resolve(__dirname, "vps", "gc", "gc.js"));
// const aws = require(path.resolve(__dirname, "vps", "aws", "aws.js"));
// // const gcHelper = require(path.resolve(__dirname, "vps", "gc", "gcHelper.js"));
// // const proxyHelper = require(path.resolve(__dirname, "proxyHelper.js"));
// // const databaseModel = require(path.resolve(__dirname, "databaseModel.js"));
// // const infoHelper = require(path.resolve(__dirname, "infoHelper.js"));

// const proxyGenModel = {};
// /**
//  * Creates the proxies by making a call to the gc.js file. Will make multiple proxies if
//  * asked by the user.
//  * @return - return a list of all the proxies created
//  */

// // proxyGenModel.createProxies = function(workerNumber, callback) {
// //   //We are using a switch here because in the future, we will have multiple proxy providers
// //   databaseModel.find("workerNumber", parseInt(workerNumber), worker => {
// //     switch (worker.vps) {
// //       //this needs to be changed later -- google cloud is the name of the html tag which is not
// //       //the best way to implement this
// //       case "google-cloud":
// //         for (i = 0; i < worker.proxiesReq; i++) {
// //           proxyGenModel.genRandomName(instanceName => {
// //             gcHelper.modifyEnvFile(worker.zone, result => {
// //               gc.createVM(
// //                 instanceName,
// //                 worker.proxiesUser,
// //                 worker.proxiesPass,
// //                 (error, ip) => {
// //                   if (!error) {
// //                     proxyHelper.addProxy(
// //                       ip,
// //                       "google-cloud",
// //                       instanceName,
// //                       worker.zone,
// //                       worker.proxiesUser,
// //                       worker.proxiesPass,
// //                       result => {}
// //                     );
// //                   }
// //                   return callback(error, ip);
// //                 }
// //               );
// //             });
// //           });
// //         }
// //         break;
// //       case "aws":
// //         for (i = 0; i < worker.proxiesReq; i++) {
// //           proxyGenModel.genRandomName(instanceName => {
// //             infoHelper.changeAWSRegion(worker.zone, result => {
// //               let params = {
// //                 username: worker.proxiesUser,
// //                 password: worker.proxiesPass,
// //                 instanceName: instanceName
// //               };
// //               aws.createProxy(params, (error, returnData) => {
// //                 let instanceID = returnData["instanceID"];
// //                 let ip = returnData["publicIP"];
// //                 proxyHelper.addProxy(
// //                   ip,
// //                   "aws",
// //                   instanceName,
// //                   worker.zone,
// //                   worker.proxiesUser,
// //                   worker.proxiesPass,
// //                   instanceID,
// //                   result => {}
// //                 );
// //                 return callback(error, ip);
// //               });
// //             });
// //           });
// //         }
// //         break;
// //       default:
// //         console.log("None");
// //     }
// //   });
// // };

// /**
//  * Adds a worker to the database
//  */
// proxyGenModel.addWorkerToDB = function(
//   workerNumber,
//   vps,
//   proxiesReq,
//   zone,
//   user,
//   pass,
//   callback
// ) {
//   let newWorker = {
//     type: "worker",
//     workerNumber: workerNumber,
//     vps: vps,
//     proxiesReq: proxiesReq,
//     zone: zone,
//     proxiesUser: user,
//     proxiesPass: pass,
//     status: "idle"
//   };
//   databaseModel.insert(newWorker, result => {
//     return callback(result);
//   });
// };

// /**
//  * Deletes worker from database
//  */
// proxyGenModel.deleteWorkerFromDB = function(workerNumber, callback) {
//   databaseModel.remove("workerNumber", workerNumber, result => {
//     return callback();
//   });
// };

// /**
//  * Gets a worker status, can be used to get worker status
//  */
// proxyGenModel.getWorkerValue = function(query, workerNumber, callback) {
//   databaseModel.findValues(query, workerNumber, result => {
//     //this gets the FIRST worker in the array.
//     return callback(result[0].status);
//   });
// };

// /**
//  * Sets a workers value whether it be status or anything else
//  */
// proxyGenModel.setWorkerValue = function(
//   queryKey,
//   queryValue,
//   setQueryKey,
//   setQueryValue,
//   callback
// ) {
//   databaseModel.update(
//     queryKey,
//     queryValue,
//     setQueryKey,
//     setQueryValue,
//     result => {}
//   );
//   return callback(setQueryValue);
// };

// /**
//  * Get all the workers in the database
//  */
// proxyGenModel.getAllWorkers = function(callback) {
//   databaseModel.findValues("type", "worker", result => {
//     return callback(result);
//   });
// };

// /**
//  * Generates a random name for the instance - instance names cannot start with a number thus
//  * we add a "g" at the beginning.
//  */
// proxyGenModel.genRandomName = function(callback) {
//   return callback(
//     "g" +
//       Math.random()
//         .toString(36)
//         .substring(7)
//   );
// };

// module.exports = proxyGenModel;
