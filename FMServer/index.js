const http = require('http');
const express = require("express");
const cors = require("cors");
const path = require("path");
const history = require('connect-history-api-fallback');
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.json({ extended: true, limit: '10mb' }));

app.use(cors());

const port = process.env.PORT || 3000;

const httpServer = http.createServer(app);

console.log('Port is ' + port);


app.use(history());

app.use("", express.static(path.join(__dirname, 'FMClient')));

app.get('/', (req, res) => {
  res.send("Invalid response");
})

httpServer.listen(port, () => {
  console.log("Server started on port " + port);
});