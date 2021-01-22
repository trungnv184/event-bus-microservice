import React, { useState } from "react";
import axios from "axios";

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("");

  const handleComment = (event) => {
    event.preventDefault();
    axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });

    setContent("");
  };

  return (
    <form onSubmit={handleComment}>
      <fieldset>
        <div className="form-group">
          <input
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </fieldset>
    </form>
  );
};

export default CommentCreate;
