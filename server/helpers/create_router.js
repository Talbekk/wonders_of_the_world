const express = require('express');
const ObjectId = require('mongodb').ObjectId;

const createRouter = function(collection){

const router = express.Router();

router.get('/', (req, res) => {
  collection.find()
  .toArray()
  .then((wonders) => res.json(wonders))
  .catch((err) => {
    console.error(err);
    res.status(500);
    res.json({ status: 500, error: err });
  });
});




}
