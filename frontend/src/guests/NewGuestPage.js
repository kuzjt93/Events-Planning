import React from "react";
import { GuestForm } from "./components/GuestForm";

export const NewGuestPage = () => {
	const [guest, setGuest] = React.useState({});

	const changeHandler = ({ target: { name, value } }) => {
		setGuest({
			...guest,
			[name]: value,
		});
	};

	const submitHandler = (e) => {
		e.preventDefault();
		console.log("submit");
	};

	return (
		<div>
			<h2>Add new guest</h2>
			<GuestForm change={changeHandler} submit={submitHandler} />
		</div>
	);
};
