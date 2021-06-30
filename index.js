const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const PORT = 5000;

app.listen(PORT, () => {
  console.log("connected on ", PORT);
});

app.use("/", express.static(path.join(__dirname, "client")));
