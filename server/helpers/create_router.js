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


router.get('/:id',(req, res) => {
  const id = req.params.id;
  collection.findOne({ _id: ObjectId(id)});
  .then((wonder) => res.json(wonder))
  .catch((err) => {
    console.error(err);
    res.status(500);
    res.json({ status: 500, error: err });
  });
});

return router;
};

module.exports = createRouter;
