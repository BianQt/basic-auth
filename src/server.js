'use strict';

const express = require('express');
const app = express();
const userRoute = require('./routes/User.route')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(userRoute);

// To check the server
app. get('/',(req,res)=>{
    res.send('<h1>Server is Up & Running!</h1>');
})

function start(port){
    app.listen(port,()=>{
        console.log(`Server is running on port ${port}`);
    })
};

module.exports = {app, start}