import React from "react";

export const GuestView = ({ guest }) => {
  return (
    <React.Fragment>
      <div>id: {guest?.id}</div>
      <div>Guest name: {guest?.name}</div>
      <div>Group: {guest?.group_type}</div>
      <div>Number: {guest?.number_of_guests}</div>
    </React.Fragment>
  );
};
