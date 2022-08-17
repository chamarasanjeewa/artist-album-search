import React from "react";
import { render, screen } from "@testing-library/react";
import SearchBar from "./components/SearchBar";

test("renders learn react link", () => {
  render(<SearchBar onSearch={() => {}} placeHolder="test place holder" />);
  const linkElement = screen.getByText(/test place holder/i);
  expect(linkElement).toBeInTheDocument();
});
