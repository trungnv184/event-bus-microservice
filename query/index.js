const express = require("express");
const axios = require("axios");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

const handleDataFromEvent = (type, data) => {
  switch (type) {
    case "POST_CREATED": {
      const { id, title } = data;
      posts[id] = {
        title,
        comments: [],
      };

      break;
    }

    case "COMMENT_CREATED": {
      const { id, content, postId } = data;
      console.log(data, "LOG_TEST");
      const post = posts[postId];

      if (post && !post.comments) {
        post.comments = [];
      }

      console.log(post.comments);

      post.comments.push({
        id,
        content,
      });
      break;
    }

    default:
      break;
  }
};
app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;
  handleDataFromEvent(type, data);

  console.log(posts);
  res.send({});
});

app.listen(4002, () => {
  console.log("QUERY_SERVICE LISTENING ON PORT 4002");
});
