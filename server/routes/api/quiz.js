const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Quiz
router.get('/', async (req, res) => {
  const quiz = await loadQuizCollection();
  res.send(await quiz.find({}).toArray());
});

async function loadQuizCollection() {
  const client = await mongodb.MongoClient.connect(
    'mongodb://mike123:Thejacket2@seven-wonders-shard-00-00-2wizi.mongodb.net:27017,seven-wonders-shard-00-01-2wizi.mongodb.net:27017,seven-wonders-shard-00-02-2wizi.mongodb.net:27017/test?ssl=true&replicaSet=seven-wonders-shard-0&authSource=admin&retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true 
    }
  );

  return client.db('wonders_of_the_world').collection('quiz');
}

module.exports = router;