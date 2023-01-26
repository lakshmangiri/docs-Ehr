const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// const postRoutes = require('./routes/patientPostRoute/post');
const userRoutes = require('./routes/userAuth-routes');



//username: lakshmananb
// password: KJvGQWXwXQUkRPKe
mongoose.connect("mongodb+srv://lakshmananb:KJvGQWXwXQUkRPKe@cluster0.9hp3xap.mongodb.net/dbDocsEhr?retryWrites=true&w=majority")
  .then(() => {
    console.log('Connected to Database')
  })
  .catch(() => {
    console.log('Connection Failed!');
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

// app.use("/api/posts", postRoutes);
app.use("/api/user", userRoutes);

module.exports = app;
