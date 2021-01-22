import React, { useState } from "react";
import axios from "axios";

const CreatePost = () => {
  const [title, setTitile] = useState("");

  const handleSubmitEvent = async (event) => {
    event.preventDefault();

    await axios.post("http://localhost:4000/posts", {
      title,
    });

    setTitile("");
  };

  return (
    <form onSubmit={handleSubmitEvent}>
      <div className="form-group">
        <label>Title</label>
        <input
          className="form-control"
          value={title}
          onChange={(event) => setTitile(event.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default CreatePost;
