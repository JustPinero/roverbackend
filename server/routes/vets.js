const express = require('express');
const router = express.Router();
const Pets = require('../../db/models/pets');
const Vets = require('../../db/models/vets');
const Bluebird = require('bluebird');

router.get('/', function (req, res, next) {
  Vets.findAll()
  .then(vets => res.json(vets))
  .catch(next);
});

router.get("/:id", function(req, res, next){
  Vets.findOne({
    where:{
      id: req.params.id
    }
  })
  .then(function(vetsById){
    if(!vetsById){
      res.sendStatus(404);
    }else{
    res.json(vetsById);
    }
  })
  .catch(next);
});

router.post("/", (req, res, next)=>{
  if(req.body){
    Vets.create(req.body)
    .then(vets=> res.status(201).json(vet))
    .catch(next);
  } else{
    res.sendStatus(500);
  }
});

router.put("/:id", (req, res, next)=>{
  Vets.findOne({
    where:{
      id: req.params.id
    }
  })
  .then(function(unupdatedVet){
    if(unupdatedVet){
    return unupdatedStudent.update(req.body);
    }
  })
  .then(updatedStudent => res.status(201).json(updatedVet))
  .catch(next);
});

router.delete("/:id", (req, res)=>{
  Vets.destroy({
    where:{
      id: req.params.id
    }
  })
  .then(()=>{
    res.send({
      message: "Vet deleted"
    });
  })
  .catch((err)=>{
    res.sendStatus(500);
  });
});

module.exports = router;
