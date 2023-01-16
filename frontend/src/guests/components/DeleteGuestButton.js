import React from "react";

export const DeleteGuestButton = ({ id }) => {
  const handler = () => {
    console.log(`Button ID: ${id} Delete clicked!`);
  };

  return <button onClick={handler}> Delete Button </button>;
};
