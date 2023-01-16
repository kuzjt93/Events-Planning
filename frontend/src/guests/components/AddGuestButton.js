import React from "react";
import { Link } from "react-router-dom";

export const AddGuestButton = ({ href }) => {
  return (
    <Link to={href}>
      <button>Add Guest</button>
    </Link>
  );
};
