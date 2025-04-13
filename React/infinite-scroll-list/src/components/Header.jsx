import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <ul>
        <Link to="/list1">
          <li>List 1</li>
        </Link>
        <Link to="/list2">
          <li>List 2</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
