import React from "react";
import { PrimaryButton } from "../../components";
import { GuestView } from "./GuestView";
const guests = require("../guests.json");

export const GuestList = () => {
	const deleteButtonHandler = () => {
		console.log("delete");
	};

	const list = guests?.map((guest) => (
		<div key={guest.id}>
			<GuestView guest={guest} />
			<PrimaryButton click={deleteButtonHandler} alt="delete-button">
				Delete
			</PrimaryButton>
			<PrimaryButton href={`${guest.id}/edit`} alt="edit-button">
				Edit
			</PrimaryButton>
		</div>
	));

	if (!list) {
		return <h3>Loading...</h3>;
	}

	return <React.Fragment>{list}</React.Fragment>;
};
