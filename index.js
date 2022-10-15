const express = require("express");

const port = 8000;
const app = express();

const middleware1 = (req, res, next) => {
  console.log("middleware1");
  next();
};

const middleware2 = (req, res, next) => {
  console.log("middleware2");
  next();
};
app.use(middleware1);
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/About", (req, res) => {
  res.send("<h1>Welcome to About Page<h1>");
});

app.get("/Section", middleware2, (req, res) => {
  res.send("<h1> middleware</h1>");
});

app.get("/Contact", middleware2, (req, res) => {
  res.send("<h1>Third Assignment</h1>");
});

app.listen(port);
