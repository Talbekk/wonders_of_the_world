const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const createRouter = require('./helpers/create_router.js');
const MongoClient = require('mongodb').MongoClient;

app.use(bodyParser.json());
app.use(cors());

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db('wonders_of_the_world');
  const wondersCollection = db.collection('wonders');
  const wonderRouter = createRouter(wondersCollection);
  app.use('/api/wonders', wonderRouter);

  const quizCollection = db.collection('quiz');
  const quizRouter = createRouter(quizCollection);
  app.use('/api/quiz', quizRouter);
})
.catch(console.err);

app.listen(3000, function(){
  console.log(`app running on port ${this.address().port}`);
})
