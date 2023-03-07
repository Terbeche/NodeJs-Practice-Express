const http = require("http");
const express = require("express");
const app = express();
app.use((request, response) => {
  response.write("<h1>Hello World!</h1>");
  response.end();
});
const server = http.createServer(app);
server.listen(3000);
