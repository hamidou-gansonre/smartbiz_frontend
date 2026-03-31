import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "@/app/page";

describe("Home Page", () => {
  it("renders the Home page and verifies SmartBiz is present", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", { name: /SmartBiz/i });
    expect(heading).toBeInTheDocument();
  });
});
