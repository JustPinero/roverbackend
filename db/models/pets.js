const Sequelize = require('sequelize');
const db = require('../index');


const Pet= db.define('pet', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate :{
      notEmpty: true
    }
  },
  photo: {
    type: Sequelize.STRING
  },
  bio:{
    type: Sequelize.STRING,
  }
});

module.exports = Pet;
