import React from "react";
import { Link } from "react-router-dom";

export const EditGuestButton = ({ href }) => {
  return (
    <Link to={href}>
      <button>Edit</button>
    </Link>
  );
};
