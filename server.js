const express = require("express");
const app = express();
const characterController = require("./controllers/characterController");

app.use("/api/characters", characterController);

app.listen(3000, console.log("running"));
