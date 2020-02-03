const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");
const path = require("path");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));



const databaseUrl = "workoutsdb";
const collections = ["workouts"];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
  console.log("Database Error:", error);
});

require("./routes/apiRoutes")(app,db)
require("./routes/htmlRoutes")(app,db)

app.listen(3000, () => {
  console.log("App running on port 3000!");
});
