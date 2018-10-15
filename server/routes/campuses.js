const express = require('express');
const router = express.Router();
const Students = require('../../db/models/students');
const Campuses = require('../../db/models/campuses');
const Bluebird = require('bluebird');

router.get('/', function (req, res, next) {
  console.log('Campuses being found');
  Campuses.findAll()
  .then(campuses => {console.log(campuses);
    return res.json(campuses);})
  .catch(next);
});

router.get("/:id", function(req, res, next){
  Campuses.findOne({
    where:{
      id: req.params.id
    }
  })
  .then(function(campusById){
    if(!campusById){
      res.sendStatus(404);
    }else{
    res.json(campusById);
    }
  })
  .catch(next);
});

router.post("/", (req, res, next)=>{
  if(req.body){
    Campuses.create(req.body)
    .then(campus=> res.status(201).json(campus))
    .catch(next);
  } else{
    res.sendStatus(500);
  }
});

router.put("/:id", (req, res, next)=>{
  Campuses.findOne({
    where:{
      id: req.params.id
    }
  })
  .then(function(unupdatedCampus){
    if(unupdatedCampus){
    return unupdatedCampus.update(req.body);
    }
  })
  .then(campus=> res.status(201).json(campus))
  .catch(next);
});

router.delete("/:id", (req, res)=>{
  Campuses.destroy({
    where:{
      id: req.params.id
    }
  })
  .then(()=>{
    res.send({
      message: "Campus removed"
    });
  })
  .catch((err)=>{
    res.sendStatus(500);
  });
});

module.exports = router;
