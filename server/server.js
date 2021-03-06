const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// const posts = require('./helpers/create_router.js');
const wonders = require('./routes/api/wonders.js');
const quiz = require('./routes/api/quiz.js');

// app.use('/api/posts', posts);
app.use('/api/wonders', wonders);
app.use('/api/quiz', quiz);

// Handle production
if (process.env.NODE_ENV === 'production') {
  // Static folder
  app.use(express.static(__dirname + '/public/'));

  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));


// const express = require('express');
// const app = express();
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const createRouter = require('./helpers/create_router.js');
// const MongoClient = require('mongodb').MongoClient;

// app.use(bodyParser.json());
// app.use(cors());

// // 'mongodb://mike123:Thejacket2@seven-wonders-shard-00-00-2wizi.mongodb.net:27017,seven-wonders-shard-00-01-2wizi.mongodb.net:27017,seven-wonders-shard-00-02-2wizi.mongodb.net:27017/test?ssl=true&replicaSet=seven-wonders-shard-0&authSource=admin&retryWrites=true&w=majority'

// MongoClient.connect('mongodb://mike123:Thejacket2@seven-wonders-shard-00-00-2wizi.mongodb.net:27017,seven-wonders-shard-00-01-2wizi.mongodb.net:27017,seven-wonders-shard-00-02-2wizi.mongodb.net:27017/test?ssl=true&replicaSet=seven-wonders-shard-0&authSource=admin&retryWrites=true&w=majority',
// { useNewUrlParser: true, useUnifiedTopology: true  })
// .then((client) => {
//   const db = client.db('wonders_of_the_world');
//   const wondersCollection = db.collection('wonders');
//   const wonderRouter = createRouter(wondersCollection);
//   app.use('/api/wonders', wonderRouter);

//   const quizCollection = db.collection('quiz');
//   const quizRouter = createRouter(quizCollection);
//   app.use('/api/quiz', quizRouter);
// })
// .catch((err) => {
//   console.error(err);
// })

// // Handle production
// if (process.env.NODE_ENV === 'production') {
//   // Static folder
//   app.use(express.static(__dirname + '/public/'));

//   // Handle SPA
//   app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
// }

// const port = process.env.PORT || 5000;

// app.listen(port, function(){
//   console.log(`app running on port ${port}`);
// })
