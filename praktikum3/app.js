//import express 
const express = require("express");

//import router
const router = require("./routes/api.js");

//membuat object express
const app = express();

// menggunakan middleware
app.use(express.json());
app.use(express.urlencoded);

//menggunakan routing (router)
app.use(router);


//Mendefinisikan Port
app.listen(3000);

