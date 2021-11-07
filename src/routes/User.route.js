"use strict";
const express = require("express");
const userRoute = express.Router();

const signIn = require('../auth/signIn');
const signUp = require('../auth/signUp');

userRoute.post("/signup", async (req, res) => {
  try {
    const obj = req.body;
    const newUser = await signUp(obj);
    res.status(200).json(newUser);
  } catch (e) {
    res.status(403).send("Error Creating User!");
  }
});

userRoute.post("/signin",signIn, async (req, res) => {
    res.status(200).json(req.user);
});

module.exports = userRoute;