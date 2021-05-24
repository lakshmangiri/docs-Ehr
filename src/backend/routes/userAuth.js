const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserAuthData = require('../model/userAuth');

const router = express.Router();

// register
router.post('/signup', (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
  .then(hash => {
    const user = new UserAuthData({
      name: req.body.name,
      email: req.body.email,
      password: hash
    });
    user.save()
    .then(result => {
      res.status(201).json({
        message: 'New User Created',
        result: result
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err,
        message: err
      });
    });
  });
});

// login
router.post('/signin', (req, res, next) => {
  let getUser;
  UserAuthData.findOne({email: req.body.email})
  .then(user => {
    if(!user)
    {
      return res.status(401).json({
        message: 'Auth failed'
      });
    }
    getUser = user;
    return bcrypt.compare(req.body.password, user.password)
      .then(result => {
        if(!result)
        {
          return res.status(401).json({
            message: 'Auth failed'
          });
        }
        const token = jwt.sign(
          {email: getUser.email, userId: getUser._id, name: getUser.name},
          'valar_morgulis_means_all_men_must_die',
          {expiresIn: '1h'});
          res.status(200).json({
            token: token
          });
      })
      .catch(err => {
        return res.status(401).json({
          message: 'Auth failed'
        });
      })

  })
});

module.exports = router;
