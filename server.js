const express = require('express');
const config = require('config');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('./libs/passport');

const app = express();

// middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// database connection
let db = config.get('mongo');

mongoose
  .connect(db.uri, { useNewUrlParser: true })
  .then(() => console.log("MongoDb connected..."))
  .catch(err => console.error(err));

// use router
app.use('/api/project', require('./routes/project'));
app.use('/api', require('./routes/sign'));

// error handling
// app.use(logErrors);
// app.use(clientErrorHandler);
// app.use(errorHandler);
app.use(function(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  console.error(err);
  res.status(500);
  res.end('error');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}...`));
