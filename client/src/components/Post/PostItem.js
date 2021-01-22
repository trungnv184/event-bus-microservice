import React from "react";
import CommentList from "../Comment/CommentList";
import CommentCreate from "../Comment/CommentCreate";

const PostItem = ({ title, comments, id }) => {
  return (
    <div className="card p-3 w-25 m-3">
      <div className="card-body">
        <h5 className="cart-title">{title}</h5>
        <CommentList comments={comments} />
        <CommentCreate postId={id} />
      </div>
    </div>
  );
};

export default PostItem;
