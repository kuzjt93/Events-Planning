import React from "react";

export const GuestView = ({ guest }) => {
	return (
		<div>
			<div>id: {guest?.id}</div>
			<div>Guest name: {guest?.name}</div>
			<div>Number: {guest?.number_of_guests}</div>
			<div>Group: {guest?.group_type}</div>
		</div>
	);
};
