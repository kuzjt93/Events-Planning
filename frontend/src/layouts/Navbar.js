import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to="/">Home</Link>

        <Link to="shopping-list">Shopping List</Link>

        <Link to="guest-list">Guest List</Link>
      </div>
    </nav>
  );
};
