import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to="home">Home</Link>
      </div>
      <div>
        <Link to="shopping-list">Shopping List</Link>
      </div>
    </nav>
  );
};
