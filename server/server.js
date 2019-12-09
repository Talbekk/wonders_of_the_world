const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const createRouter = require('./helpers/createRouter.js');

app.use(bodyParser.json());
app.use(cors());

const wonderRouter = createRouter;
app.use('/api/wonders', wonderRouter);


app.listen(3000, function(){
  console.log(`app running on port ${this.address().port}`);
})
