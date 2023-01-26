const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, 'valar_morgulis_means_all_men_must_die');
    next();
  } catch (error) {
    res.status(401).json({ message: "Auth Failed"});
  }
};

// This function should be used on the post method in add-patient, edit and delete patient method.
// Because, We can only add, edit or delete patient if logged in.


// TO use that simply import this file in the patientPost and call that variable in the post method.

// like this

// router.delete("/:id", checkAuth, (res, req, next))..........
