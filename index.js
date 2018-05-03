const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/ok', (req, res) => {
  res.send('OK');
})

app.get('/test', (req, res) => {
  Test.find((err, test) => {
    res.json(test);
  })
})

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});

mongoose.connect('mongodb://mongo/node-demo', () => {
  console.log('Connected to db on mongo');
});

const testSchema = new mongoose.Schema({
  test: String
});

var Test = mongoose.model('Test', testSchema);

var db = mongoose.connection;
db.once('open', () => {
  addTest();
})

var addTest = function () {
  var test = new Test({
    test: 'This is a test'
  });

  test.save((err, res) => {
    console.log('test added to db')
  })
}