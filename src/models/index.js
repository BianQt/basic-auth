'use strict';
require('dotenv').config();

const POSTGRE_URL = process.env.NODE_ENV === 'test' ?  'sqlite:memory:'    : process.env.DATABASE_URL;

const {Sequelize, DataTypes} = require('sequelize');

let sequelizeOptions = process.env.NODE_ENV === 'production' ? {dialectOptions: {ssl: {require: true, rejectUnauthorized: false}}} : {};

let sequelize = new Sequelize(POSTGRE_URL, sequelizeOptions);

const User = require('./User.model');

module.exports = {
    db: sequelize,
    Users: User(sequelize, DataTypes),
};