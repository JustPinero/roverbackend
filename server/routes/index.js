const express = require('express');
const router = express.Router();


router.use('/vets', require('./vets'));
router.use('/pets', require('./pets'));


router.use(function (req, res) {
  res.status(404).end();
});


module.exports = router;
