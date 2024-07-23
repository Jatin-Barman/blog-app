import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders BlogPostList on default route", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
});

test("renders BlogPostDetails on /post/:id route", () => {
  render(
    <MemoryRouter initialEntries={["/post/0"]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
});
