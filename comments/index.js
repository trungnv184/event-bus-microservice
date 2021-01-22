const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
const { randomBytes } = require("crypto");

const app = express();
app.use(cors());
app.use(bodyParser.json());
const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  console.log(req.params.id);
  const comments = commentsByPostId[req.params.id] || [];
  res.status(201).send(commentsByPostId[req.params.id] || []);
});

app.post("/posts/:id/comments", async (req, res) => {
  const { content } = req.body;
  const comments = commentsByPostId[req.params.id] || [];
  const id = randomBytes(4).toString("hex");
  const postId = req.params.id;

  comments.push({
    id,
    content,
    postId,
  });

  commentsByPostId[postId] = comments;

  console.log(req.params, "POST_ID_TEST");

  await axios.post("http://localhost:4005/events", {
    type: "COMMENT_CREATED",
    data: {
      id,
      content,
      postId,
    },
  });

  res.status(201).send(comments);
});

app.post("/events", (req, res) => {
  if (req.body.type === "COMMENT_CREATED") {
    console.log("Received Event", req.body.type);
  }

  res.send({});
});

app.listen(4001, () => {
  console.log("listening on PORT 4001");
});
