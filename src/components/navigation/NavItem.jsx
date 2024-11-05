import React from "react";
import { Link } from "react-router-dom";

// props -> {text, url}
const NavItem = ({ text, url }) => {
  return (
    <Link to={url} className="text-white p-2">
      {text}
    </Link>
  );
};

export default NavItem;
