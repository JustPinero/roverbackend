const Sequelize = require('sequelize');
const db = require('../index');

const Vet= db.define('vet', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate :{
      notEmpty: true
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate :{
      notEmpty: true
    }
  },
  photo: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING,
      validate: {
        isEmail: true
      }
    }
}, {
    getterMethods: {
      fullName: function(){
        return (this.firstName + " "+ this.lastName);
      }
    }
});

module.exports = Vet;
