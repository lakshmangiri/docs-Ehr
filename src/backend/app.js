const express = require('express');
const mongoose = require('mongoose');
const app = express();

//const postRoutes = require();
//const userRoutes = require();

mongoose.connect('mongodb+srv://dbDocsEhr:kJ3L1FoaXhI2VXLu@cluster0.gtejq.mongodb.net/dbEHR?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('Connected to Database')
  })
  .catch(() => {
    console.log('Connected Failed')
  });


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, PATCH, POST, DELETE, OPTIONS');
  next();
});

// app.use("/api/posts", postRoutes);
// app.use("/api/user", userRoutes);

module.exports = app;
