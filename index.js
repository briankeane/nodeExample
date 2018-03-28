const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// middleware
// app.use(morgan('dev'));
// app.use(bodyParser.json());

// routes
app.get('/test', function (req, res, next) {
  res.status(200).json({ "message": "I rock" })
});

app.get('/suck', function (req, res, next) {
  res.status(200).json({ message: "I suck" })
})

const port = process.env.PORT || 9111

app.listen((port || 9111), function () {
  console.log(`Example app listening on port !`)
});

module.exports = app;