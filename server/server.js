const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const createRouter = require('./helpers/create_router.js');
const MongoClient = require('mongodb').MongoClient;

app.use(bodyParser.json());
app.use(cors());

//Handle Production 
if (process.env.NODE_ENV === 'production'){

  //Static Folder
  app.use(express.static(__dirname + '/public'));

  //Handle single page application
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
  
}

MongoClient.connect('mongodb+srv://mike123:Thejacket2@seven-wonders-2wizi.mongodb.net/test?retryWrites=true&w=majority')
.then((client) => {
  const db = client.db('wonders_of_the_world');
  const wondersCollection = db.collection('wonders');
  const wonderRouter = createRouter(wondersCollection);
  app.use('/api/wonders', wonderRouter);

  const quizCollection = db.collection('quiz');
  const quizRouter = createRouter(quizCollection);
  app.use('/api/quiz', quizRouter);
})
.catch((err) => {
  console.error(err);
})

app.listen(3000, function(){
  console.log(`app running on port ${this.address().port}`);
})
