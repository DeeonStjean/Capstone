// bring in express for our server setup
import express from 'express';
import cors from 'cors';
import 'dotenv/config'
// bring in the function that will make the connection to the database
import connectDB from './config.js'

const express = require("express");
// create our express app
const app = express();

// setup a cors middleware for our express app
app.use(cors());
// data from client stored in request.body and formatted as json
app.use(express.json());

// choosing a port 
const port = 5000;
  
app.post('/weather', (req, res) => {
    // Save weather data to database
});
  
app.listen(port,() => {
    console.log("Port {server running on port");
});