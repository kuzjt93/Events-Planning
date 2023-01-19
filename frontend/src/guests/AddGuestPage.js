import React from "react";
import { GuestForm } from "./components";

export const AddGuestPage = () => {
	const [guest, setGuest] = React.useState({});

	const changeHandler = ({ target: { name, value } }) => {
		setGuest((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const submitHandler = (e) => {
		e.preventDefault();
		console.log("submit", guest);
	};

	return (
		<div>
			<h2>Add new guest</h2>
			<GuestForm change={changeHandler} submit={submitHandler} />
		</div>
	);
};
