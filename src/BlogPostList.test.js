import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import BlogPostList from "./BlogPostList";

const posts = [
  {
    title: "Test Post 1",
    description: "This is a test post 1",
    publishedAt: "2023-07-23T10:00:00Z",
    urlToImage: "https://via.placeholder.com/150",
  },
  {
    title: "Test Post 2",
    description: "This is a test post 2",
    publishedAt: "2023-07-24T10:00:00Z",
    urlToImage: "https://via.placeholder.com/150",
  },
];

test("renders loading message when there are no posts", () => {
  render(
    <Router>
      <BlogPostList posts={[]} />
    </Router>
  );
  expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
});

test("renders blog posts correctly", () => {
  render(
    <Router>
      <BlogPostList posts={posts} />
    </Router>
  );

  expect(screen.getByText(/Test Post 1/i)).toBeInTheDocument();
  expect(screen.getByText(/This is a test post 1/i)).toBeInTheDocument();
  expect(screen.getByText(/Test Post 2/i)).toBeInTheDocument();
  expect(screen.getByText(/This is a test post 2/i)).toBeInTheDocument();
});
