import { describe, it, expect } from "vitest";
import SearchBar from "./SearchBar";
import { render, screen } from "@testing-library/react";

const SearchBarWrapped = () => {
  const [query, setQuery] = useState("");
  const [stockChecked, setStockChecked] = useState(false);

  const [sort, setSort] = useState("asc");

  return (
    <SearchBar
      query={query}
      setQuery={setQuery}
      stockChecked={stockChecked}
      setStockChecked={setStockChecked}
      sort={sort}
      setSort={setSort}
    />
  );
};

describe("SearchBar Component", () => {
  it("should render the component", async () => {
    render(<SearchBarWrapped />);

    const txt = await screen.findByTestId("search-test");
    const checkbox = await screen.findByTestId("search-checkbox");
    const select = await screen.findByTestId("search-select");

    expect(txt).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
    expect(checkbox.nextSibling).toBe("Only show products in stock");
    expect(select).toBeInTheDocument();
  });
});
