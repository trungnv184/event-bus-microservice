const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
const { randomBytes } = require("crypto");

const posts = {};
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", async (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;
  posts[id] = {
    id,
    title,
  };

  await axios.post("http://localhost:4005/events", {
    type: "POST_CREATED",
    data: posts[id],
  });

  res.status(201).send(posts[id]);
});

app.post("/events", (req, res) => {
  if (req.body.type === "POST_CREATED") {
    console.log("Received Event", req.body.type);
  }

  res.send({});
});

app.listen(4000, () => {
  console.log("Listening on PORT 4000");
});
