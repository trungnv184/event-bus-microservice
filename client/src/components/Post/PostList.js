import React, { useEffect, useState } from "react";
import axios from "axios";
import PostItem from "./PostItem";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await axios.get("http://localhost:4002/posts");
    const newPosts = Object.keys(response.data).map((postId) => {
      return {
        postId,
        ...response.data[postId],
      };
    });

    setPosts(newPosts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="d-flex flex-row justify-content-start w-100">
      {Object.values(posts).map(({ title, comments, postId }) => {
        return (
          <PostItem
            title={title}
            comments={comments}
            id={postId}
            key={postId}
          />
        );
      })}
    </div>
  );
};

export default PostList;
