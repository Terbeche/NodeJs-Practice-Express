const https = require("https");
const express = require("express");
const fs = require("fs");
const app = express();
app.use((request, response) => {
  response.write("<h1>Hello World!</h1>");
  response.end();
});
const options = {
  key: fs.readFileSync("server.key"),
  cert: fs.readFileSync("server.cert"),
};
https.createServer(options, app).listen(3000);
