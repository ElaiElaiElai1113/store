import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Buttom component", () => {
  it("should render properly", async () => {
    const btn = await screen.findByTestId("button");
    expect(btn).toBeInTheDocument();
    expect(btn.textContent).toBe("Sample");
  });

  it("should be clickable", async () => {
    const onClick = vi.fn();
    render(<Button name="Sample" onClick={onClick} />);
  });
  render(<Button />);
});
