const express = require('express');
const router = express.Router();
const Pets = require('../../db/models/pets');
const Vets = require('../../db/models/vets');
const Bluebird = require('bluebird');

router.get('/', function (req, res, next) {
  console.log('Pets being found');
  Pets.findAll()
  .then(pets => {console.log(pets);
    return res.json(pets);})
  .catch(next);
});

router.get("/:id", function(req, res, next){
  Pets.findOne({
    where:{
      id: req.params.id
    }
  })
  .then(function(petById){
    if(!petById){
      res.sendStatus(404);
    }else{
    res.json(petById);
    }
  })
  .catch(next);
});

router.post("/", (req, res, next)=>{
  if(req.body){
    Pets.create(req.body)
    .then(pet=> res.status(201).json(pet))
    .catch(next);
  } else{
    res.sendStatus(500);
  }
});

router.put("/:id", (req, res, next)=>{
  Pets.findOne({
    where:{
      id: req.params.id
    }
  })
  .then(function(unupdatedPet){
    if(unupdatedPet){
    return unupdatedPet.update(req.body);
    }
  })
  .then(pet=> res.status(201).json(pet))
  .catch(next);
});

router.delete("/:id", (req, res)=>{
  Pets.destroy({
    where:{
      id: req.params.id
    }
  })
  .then(()=>{
    res.send({
      message: "Pet removed"
    });
  })
  .catch((err)=>{
    res.sendStatus(500);
  });
});

module.exports = router;
