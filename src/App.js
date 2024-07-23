import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogPostList from "./BlogPostList";
import BlogPostDetails from "./BlogPostDetails";
import axios from "axios";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=22dcb0f315054022bd47856a110fc2ed"
      )
      .then((response) => {
        setPosts(response.data.articles);
      });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogPostList posts={posts} />} />
        <Route path="/post/:id" element={<BlogPostDetails posts={posts} />} />
      </Routes>
    </Router>
  );
};

export default App;
