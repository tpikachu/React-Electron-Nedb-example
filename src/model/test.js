import databaseModel from "./databaseModel.js";

const proxyGenModel = {};

proxyGenModel.addWorkerToDB = function(
  workerNumber,
  vps,
  proxiesReq,
  zone,
  user,
  pass,
  callback
) {
  let newWorker = {
    type: "worker",
    workerNumber: workerNumber,
    vps: vps,
    proxiesReq: proxiesReq,
    zone: zone,
    proxiesUser: user,
    proxiesPass: pass,
    status: "idle"
  };
  databaseModel.insert(newWorker, result => {
    return callback(result);
  });
};

module.exports = proxyGenModel;
