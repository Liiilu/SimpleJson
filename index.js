const express = require('express');
const app = express();
const port = 3300;
const cors = require("cors");

const http = require("http");
http.createServer(app).listen(3300);

app.use(cors());

const cities = require("./routes/cities");

app.use("/cities", cities)