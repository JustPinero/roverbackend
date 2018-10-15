const express = require('express');
const router = express.Router();


router.use('/students', require('./students'));
router.use('/campuses', require('./campuses'));


router.use(function (req, res) {
  res.status(404).end();
});


module.exports = router;
