const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const store = sequelize.define('store' , {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  chocolate: {
    type: Sequelize.STRING,
    allowNull: false
  },
  qty: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  price:{
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = store;