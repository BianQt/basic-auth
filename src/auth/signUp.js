'use strict';
const {Users} = require('../models/index');
const bcrypt = require('bcrypt');

module.exports = async (obj)=>{
    try {
    obj.password = await bcrypt.hash(obj.password, 10);
    const record = await Users.create(obj);
    return record;
  } catch (e) {
    console.error('Error in creating new user')
  }
}