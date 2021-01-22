import React from "react";
import PostCreate from "../Post/PostCreate";

const Header = () => {
  return (
    <header>
      <h1 className="text-center">Create Post</h1>
      <PostCreate />
    </header>
  );
};

export default Header;
