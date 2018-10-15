const Sequelize = require('sequelize');
const db = require('../index');


const vet= db.define('vet', {
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

module.exports = vet;
