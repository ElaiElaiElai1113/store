import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FilterProductTable from "./components/FilterProductTable";
import SearchBar from "./components/SearchBar";
import ProductTable from "./components/ProductTable";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FilterProductTable>
        <SearchBar />
        <ProductTable />
      </FilterProductTable>
    </>
  );
}

export default App;
