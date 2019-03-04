const remote = require("electron").remote;
const databaseModel = {};

let db = global.database;

/**
 * Inserts information into the database
 */
databaseModel.insert = function(info, callback) {
  db.insert(info, (err, doc) => {
    if (err) console.log("ERROR" + err);
    return callback(doc);
  });
};

/**
 * Finds information from databse
 */
databaseModel.find = function(query, param, callback) {
  db.findOne({ [query]: param }, function(err, doc) {
    return callback(doc);
  });
};

/**
 * Finds information from databse
 */
databaseModel.findMultiple = function(query, param, callback) {
  db.findOne({ [query]: param }, { multi: true }, function(err, doc) {
    return callback(doc);
  });
};

/**
 * Gets all the accounts that are stored in the database
 */
databaseModel.getAllValues = function(callback) {
  db.find({}, (err, result) => {
    return callback(result);
  });
};

/**
 * Gets all the accounts that are stored in the database
 */
databaseModel.findValues = function(typeKey, typeValue, callback) {
  db.find({ [typeKey]: typeValue }, (err, result) => {
    return callback(result);
  });
};
/**
 * Removes a single value
 */
databaseModel.remove = function(value, param, callback) {
  db.remove({ [value]: param }, { multi: true }, function(err, numDeleted) {
    if (err) {
      console.log("Error with deleting!" + err);
    }
    return callback(numDeleted);
  });
};

/**
 * Updates a single value
 */
databaseModel.update = function(value, param, setKeyValue, newVal, callback) {
  db.update({ [value]: param }, { $set: { [setKeyValue]: newVal } }, err => {
    return callback(err);
  });
};

module.exports = databaseModel;
