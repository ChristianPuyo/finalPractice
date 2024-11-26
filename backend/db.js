const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:solsol03@localhost:5433/contactos', {
    logging: false
});

module.exports = sequelize;
