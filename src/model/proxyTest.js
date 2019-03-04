// const request = require("request");
// const fs = require("fs");
// const proxyTester = {};

// /**
//  * Pass in params... {host, port, user, password, siteToTestOn}
//  */
// proxyTester.testProxy = function(host, port, user, password, callback) {
//   proxyTester.getRandomUserAgent((err, data) => {
//     if (err) console.log(err);
//     var proxyUrl = "http://" + user + ":" + password + "@" + host + ":" + port;
//     var proxiedRequest = request.defaults({ proxy: proxyUrl });
//     // proxiedRequest.setTimeOut(10)
//     let user_agent = data;
//     var start = Date.now();
//     proxiedRequest.get(
//       {
//         proxy: proxyUrl,
//         url: "https://google.com",
//         headers: { "User-Agent": user_agent },
//         timeout: 10,
//         time: true
//       },
//       function(error, response, body) {
//         // if (error) console.log(error)
//         // console.log('Request time in ms', Date.now() - start);
//         let time = Date.now() - start;
//         return callback(time);
//       }
//     );
//   });
// };

// proxyTester.getRandomUserAgent = function(callback) {
//   let userAgentPath = require("path").resolve(
//     __dirname,
//     "..",
//     "..",
//     "userAgents.txt"
//   );
//   fs.readFile(userAgentPath, "utf8", (err, data) => {
//     let user_agents_list = data.split("\n");
//     // picks a random number from 1 to length of list
//     let random_num = Math.floor(Math.random() * user_agents_list.length - 1);
//     // needs trim since there is white space
//     let random_user_agent = user_agents_list[random_num].trim();

//     return callback(err, random_user_agent);
//   });
// };

// module.exports = proxyTester;
