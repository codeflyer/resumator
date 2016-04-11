var server = require('../server');
const Promise = require('bluebird');

function autoupdate(ds, table) {

  return new Promise((resolve, reject) => {
    if (ds.connected) {
      ds.autoupdate(table, function (err) {
        if (err) {
          console.log('error here');
          reject(err);
        }
        console.log('Loopback tables [' + table + '] created in ', ds.adapter.name);
        resolve();
      });
    } else {
      ds.once('connected', function () {
        ds.autoupdate(table, function (err) {
          if (err) {
            console.log('error here');
            reject(err);
          }
          console.log('Loopback tables [' + table + '] created in ', ds.adapter.name);
          resolve();
        });
      });
    }
  })
}

module.exports = function (app, cb) {
  var ds = server.dataSources.resumator_db;
  var lbTables = ['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role'];
  Promise.each(lbTables, function (value) {
    return autoupdate(ds, value)
  }).then(result => {
    cb(null, result);
  }).catch(error => {
    cb(error);
  })
};
