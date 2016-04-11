var ds = require('../utils/dataSources')['resumator_db'];
var schema = require('./person.json');
ds.createModel(schema.name, schema.properties, schema.options);

ds.autoupdate(schema.name, function (err, result) {
  ds.discoverModelProperties('people', function (err, props) {
    console.log(props);
  });
});

module.exports = function(Person) {

};
