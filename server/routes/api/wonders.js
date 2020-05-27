const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Posts
router.get('/', async (req, res) => {
  const wonders = await loadWondersCollection();
  res.send(await wonders.find({}).toArray());
});

// // Add Post
// router.post('/', async (req, res) => {
//   const posts = await loadPostsCollection();
//   await posts.insertOne({
//     text: req.body.text,
//     createdAt: new Date()
//   });
//   res.status(201).send();
// });

// // Delete Post
// router.delete('/:id', async (req, res) => {
//   const posts = await loadPostsCollection();
//   await posts.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
//   res.status(200).send({});
// });

async function loadWondersCollection() {
  const client = await mongodb.MongoClient.connect(
    'mongodb://mike123:db123@ds231307.mlab.com:31307/heroku_hk4kzz5j',
    {
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    }
  );

  return client.db('heroku_hk4kzz5j').collection('wonders');
}

module.exports = router;