const express = require('express');
const PatientPost = require("../../model/patientPostModel/post");
const checkAuth = require("../../middleware/checkAuth");

const router = express.Router();

router.post("", checkAuth, (req, res, next) => {
  const post = new PatientPost({
  title: req.body.title,
  name: req.body.name,
  emailId: req.body.emailId,
  contactNo: req.body.contactNo,
  gender: req.body.gender,
  martialStatus: req.body.martialStatus,
  dob: req.body.dob,
  age: req.body.age,
  weight: req.body.weight,
  height: req.body.height,
  bmi: req.body.bmi,
  bloodGroup: req.body.bloodGroup,
  alcoholConsumption: req.body.alcoholConsumption,
  smokingHabits: req.body.smokingHabits,
  allergies: req.body.allergies,
  currentMedications: req.body.currentMedications,
  pastMedications: req.body.pastMedications
  });
  post.save().then(createdPost => {
    res.status(201).json({
      message: 'Post added successfully',
      postId: createdPost._id
    });
  });
});

router.put("/:id", checkAuth, (req, res, next) => {
  const post = new this.post({
    _id: req.body.id,
    title: req.body.title,
    name: req.body.name,
    emailId: req.body.emailId,
    contactNo: req.body.contactNo,
    gender: req.body.gender,
    martialStatus: req.body.martialStatus,
    dob: req.body.dob,
    age: req.body.age,
    weight: req.body.weight,
    height: req.body.height,
    bmi: req.body.bmi,
    bloodGroup: req.body.bloodGroup,
    alcoholConsumption: req.body.alcoholConsumption,
    smokingHabits: req.body.smokingHabits,
    allergies: req.body.allergies,
    currentMedications: req.body.currentMedications,
    pastMedications: req.body.pastMedications
  });
  PatientPost.updateOne({_id: req.params.id }, post).then(result => {
    res.status(200).json({ message: "Update successful !"});
  });
});

router.get("", (req, res, next) => {
  PatientPost.find().then(documents => {
    res.status(200).json({
      message: "Posts fetched successfully !",
      posts: documents
    });
  });
});

router.get("/:id", (req, res, next) => {
  PatientPost.findById(req.params.id).then(post => {
    if (post) {
      res.status(200).json(post);
    }
    else
    {
      res.status(404).json({ message: "Post not Found !" });
    }
  });
});

router.delete("/:id", checkAuth, (req, res, next) => {
  PatientPost.deleteOne({_id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: 'Post deleted' });
  });
});

module.exports = router;
