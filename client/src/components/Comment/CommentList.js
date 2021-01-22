import React from "react";

const CommentList = ({ comments }) => {
  return (
    <ul>
      {comments &&
        comments.map(({ id, content }) => {
          return <li key={id}> {content}</li>;
        })}
    </ul>
  );
};

export default CommentList;
