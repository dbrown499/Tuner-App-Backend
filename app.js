const express = require('express');
const cors = require("cors");


const app = express();

app.use(cors());


app.get('/', (req, res) => {
  res.send('Welcome To Tuner!');
});

const songsController = require("./controllers/songsController.js");
app.use("/songs", songsController);

app.get("*", (req, res) => {
    res.status(404).send("Page not found");
  });

module.exports = app;
