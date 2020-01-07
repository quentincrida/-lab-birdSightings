const express = require('express');
const app = express();
const parser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

app.use(cors());
app.use(parser.json());


MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if(err) {
    console.log(err);
  }
  const db = client.db('birds');
  const sightingsCollection = db.collection('sightings');
  const sightingsRouter = createRouter(sightingsCollection);
  app.use('/api/sightings', sightingsRouter);


app.listen(3000, function () {
console.log(`Listening on port ${ this.address().port }`);
})
})
