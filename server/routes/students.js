const express = require('express');
const router = express.Router();
const Students = require('../../db/models/students');
const Campuses = require('../../db/models/campuses');
const Bluebird = require('bluebird');

router.get('/', function (req, res, next) {
  Students.findAll()
  .then(students => res.json(students))
  .catch(next);
});

router.get("/:id", function(req, res, next){
  Students.findOne({
    where:{
      id: req.params.id
    }
  })
  .then(function(studentsById){
    if(!studentsById){
      res.sendStatus(404);
    }else{
    res.json(studentsById);
    }
  })
  .catch(next);
});

router.post("/", (req, res, next)=>{
  if(req.body){
    Students.create(req.body)
    .then(student=> res.status(201).json(student))
    .catch(next);
  } else{
    res.sendStatus(500);
  }
});

router.put("/:id", (req, res, next)=>{
  Students.findOne({
    where:{
      id: req.params.id
    }
  })
  .then(function(unupdatedStudent){
    if(unupdatedStudent){
    return unupdatedStudent.update(req.body);
    }
  })
  .then(updatedStudent => res.status(201).json(updatedStudent))
  .catch(next);
});

router.delete("/:id", (req, res)=>{
  Students.destroy({
    where:{
      id: req.params.id
    }
  })
  .then(()=>{
    res.send({
      message: "Student deleted"
    });
  })
  .catch((err)=>{
    res.sendStatus(500);
  });
});

module.exports = router;
