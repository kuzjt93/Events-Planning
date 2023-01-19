import React, { useState } from "react";
import { GuestForm } from "./components";

export const EditGuestPage = () => {
	const guestInit = {
		guest_name: "",
		number_of_guests: "",
		group_type: "Family",
	};

	const [guest, setGuest] = useState({ ...guestInit });

	const changeHandler = ({ target: { id, value } }) => {
		setGuest((prev) => ({
			...prev,
			[id]: value,
		}));
	};

	const submitHandler = (e) => {
		e.preventDefault();
		console.log("🚀 ~ file: guest", guest);
	};

	return (
		<React.Fragment>
			<div>Edit Guest Page</div>
			<GuestForm guest={guest} change={changeHandler} submit={submitHandler} />
		</React.Fragment>
	);
};
