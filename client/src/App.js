import React from "react";
import Layout from "./components/Layout/Layout";
import PostList from "./components/Post/PostList";

const App = () => {
  return (
    <div className="container">
      <Layout>
        <PostList />
      </Layout>
    </div>
  );
};

export default App;
