import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import BlogPostDetails from "./BlogPostDetails";

const posts = [
  {
    title: "Test Post 1",
    content: "Full content of test post 1",
    publishedAt: "2023-07-23T10:00:00Z",
    urlToImage: "https://via.placeholder.com/150",
  },
  {
    title: "Test Post 2",
    content: "Full content of test post 2",
    publishedAt: "2023-07-24T10:00:00Z",
    urlToImage: "https://via.placeholder.com/150",
  },
];

test("renders post details correctly", () => {
  render(
    <MemoryRouter initialEntries={["/post/0"]}>
      <Routes>
        <Route path="/post/:id" element={<BlogPostDetails posts={posts} />} />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText(/Test Post 1/i)).toBeInTheDocument();
  expect(screen.getByText(/Full content of test post 1/i)).toBeInTheDocument();
});

test('renders "Post not found" for invalid post id', () => {
  render(
    <MemoryRouter initialEntries={["/post/99"]}>
      <Routes>
        <Route path="/post/:id" element={<BlogPostDetails posts={posts} />} />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText(/Post not found/i)).toBeInTheDocument();
});
