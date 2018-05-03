const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const DB_CONNECTION = 'mongodb://mongo/node-demo';

const testSchema = new mongoose.Schema({
  test: String
});

var Test = exports.Test = mongoose.model('Test', testSchema);

exports.initializeMongo = function () {
  mongoose.connect(DB_CONNECTION);

  console.log('Connecting to database')

  var db = mongoose.connection;
  db.once('open', function() {
    addTest();
  })
}

var addTest = function () {
  var test = new Test({
    test: 'This is a test'
  });

  test.save((err, res) => {
    console.log('test added to db')
  })
}