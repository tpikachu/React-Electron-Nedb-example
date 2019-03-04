// const fs = require("fs");
// const path = require("path");

// const infoHelper = {};

// // const configPath = require('path').resolve(__dirname, '../../config.json');

// const vpsDict = {
//   gc: "GOOGLE_CLOUD_API_KEY",
//   aws: "AWS_API_KEY",
//   upcloud: "UPCLOUD_API_KEY"
// };

// infoHelper.copySecretsFile = function(filePath) {
//   //goes back two directories because w/o it it is the abs path to infoHelper.js
//   const secretsPath = require("path").resolve(
//     __dirname,
//     "vps",
//     "gc",
//     "secrets.json"
//   );
//   fs.copyFile(filePath, secretsPath, (err, data) => {
//     alert("saved!");
//     if (err) console.log(err);
//   });
// };

// infoHelper.saveAWSInfo = function(params, callback) {
//   let configPath = path.resolve(__dirname, "vps", "aws", "config.json");
//   let config = {
//     accessKeyId: params.accessKeyId,
//     secretAccessKey: params.secretAccessKey,
//     region: "us-east-1"
//   };
//   fs.writeFile(configPath, JSON.stringify(config), err => {
//     return callback();
//   });
// };

// /**
//  *
//  */
// infoHelper.changeAWSRegion = function(newRegion, callback) {
//   let configPath = path.resolve(__dirname, "vps", "aws", "config.json");
//   fs.readFile(configPath, "utf-8", (err, data) => {
//     let newConfig = JSON.parse(data);
//     newConfig["region"] = newRegion;
//     fs.writeFile(configPath, JSON.stringify(newConfig), err => {
//       return callback(null);
//     });
//   });
// };
// /**
//  * Save the AWS access and info key
//  */
// //Shows 4 characters of API Key
// /**
//  * Onlys shows the last 4 digits of the API key
//  * (In the future probably make a feature where user can toggle on/off to show the API key.)
//  */
// infoHelper.getHiddenApiKey = function(vps, callback) {
//   infoHelper.getApiKey(vps, (err, data) => {
//     if (data.length > 4) {
//       let hidden_key = data.substr(0, 4) + "*".repeat(data.length - 3);

//       return callback(null, hidden_key);
//     }

//     return callback(null, data);
//   });
// };

// module.exports = infoHelper;
