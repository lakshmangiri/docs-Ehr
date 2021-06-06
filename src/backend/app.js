const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const postRoutes = require('./routes/patientPostRoute/post');
const userRoutes = require('./routes/userAuth');

mongoose.connect('mongodb+srv://dbDocsEhr:kJ3L1FoaXhI2VXLu@cluster0.gtejq.mongodb.net/dbEHR?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
  .then(() => {
    console.log('Connected to Database')
  })
  .catch(() => {
    console.log('Connected Failed')
  });

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-type, Accept, Authorization");
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, PATCH, POST, DELETE, OPTIONS');
  next();
});

app.use("/api/posts", postRoutes);
app.use("/api/user", userRoutes);

module.exports = app;
