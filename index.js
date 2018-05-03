const express = require('express');
const app = express();
const database = require('./database')

database.initializeMongo();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/ok', (req, res) => {
  res.send('OK');
})

app.get('/test', (req, res) => {
  database.Test.find((err, test) => {
    res.json(test);
  })
})

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});
