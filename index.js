const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const PORT = 5000;

var posts = [
  { id: 0, title: "First post", description: "description of post" },
];

app.listen(PORT, () => {
  console.log("connected on ", PORT);
});

app.use("/", express.static(path.join(__dirname, "client")));

app.get("/api/all", (req, res) => {
  res.send(JSON.stringify(posts));
});

app.post("/api/new", bodyParser.json(), (req, res) => {
  let title = req.body.title;
  let description = req.body.description;

  let id = posts.length + 1;

  posts.push({ id, title, description });

  res.send("");
});
