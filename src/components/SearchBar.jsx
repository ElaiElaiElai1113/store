import React from "react";

const SearchBar = ({ query, setQuery, stockChecked, setStockChecked }) => {
  return (
    <div>
      <input
        type="text"
        value={query}
        placeholder="Place text here"
        onChange={(e) => setQuery(e.target.value)}
      />
      <div>
        <input
          type="checkbox"
          checked={stockChecked}
          onChange={(e) => setStockChecked(e.target.checked)}
        />
        Only shows products in stocks
      </div>
    </div>
  );
};

export default SearchBar;
