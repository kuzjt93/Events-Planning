import React from "react";
import { DeleteGuestButton } from "./DeleteGuestButton";
import { EditGuestButton } from "./EditGuestButton";
import { GuestView } from "./GuestView";
const guests = require("../guests.json");

export const GuestList = () => {
  const list = guests?.map((guest) => (
    <div>
      <GuestView guest={guest} />
      <DeleteGuestButton id={guest.id} />
      <EditGuestButton href={`/guest-list/${guest.id}/edit`} />
    </div>
  ));

  if (!list) {
    return <h3>Loading...</h3>;
  }

  return <React.Fragment>{list}</React.Fragment>;
};
