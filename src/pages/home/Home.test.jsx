
/** @format */
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import Home from "./Home";

// Mock axios
jest.mock("axios");

const mockNews = [
  {
    id: 1,
    headline: "Markets Rally on Strong Earnings",
    source: "The Economic Times",
    datetime: 1623542400, 
    image: "https://example.com/news1.jpg",
    url: "https://example.com/news1",
  },
];

describe("Home Component", () => {
  it("renders loading state initially", () => {
    render(<Home />);
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });

  it("renders news after successful fetch", async () => {
    axios.get.mockResolvedValueOnce({ data: mockNews });

    render(<Home />);

  
    await waitFor(() =>
      expect(
        screen.getByText("Markets Rally on Strong Earnings")
      ).toBeInTheDocument()
    );

 
    expect(screen.getByText("The Economic Times")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "https://example.com/news1.jpg"
    );
  });

  it("renders error message when API fails", async () => {
    axios.get.mockRejectedValueOnce(new Error("Network error"));

    render(<Home />);

    await waitFor(() =>
      expect(screen.getByText(/Failed to load news/i)).toBeInTheDocument()
    );
  });
});
