const serverless = require("serverless-http");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello from AWS Lambda 🚀" });
});

module.exports.handler = serverless(app);
