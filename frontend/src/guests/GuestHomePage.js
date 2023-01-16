import React from "react";
import { AddGuestButton } from "./components/AddGuestButton";
import { GuestList } from "./components/GuestList";

export const GuestHomePage = () => {
	return (
		<React.Fragment>
			<div>Guest Home Page</div>
			<AddGuestButton href={`/guest-list/add`} />
			<GuestList />
		</React.Fragment>
	);
};
