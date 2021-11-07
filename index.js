'use strict';
const {start} = require('./src/server');
const {db} = require('./src/models/index')
require('dotenv').config();
const port = process.env.PORT || 8080;

db.sync().then(()=>{
    start(port);
}).catch(console.error);