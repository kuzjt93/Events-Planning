import React from "react";
import Form from "react-bootstrap/Form";
import { PrimaryButton } from "../../components/Buttons";

const arr = [
	["guest_name", "Guest Name:", "text", "Enter guest name"],
	["number_of_guests", "Number of Guests:", "number", "Enter number of guests"],
	["group_type", "Group Type:", "checkbox", "Enter name"],
];

export const GuestForm = ({ guest, change, submit }) => {
	const list = arr.map((element, i) =>
		i !== arr.length - 1 ? (
			<Form.Group key={i} className="mb-3" controlId={element[0]}>
				<Form.Label>{element[1]}</Form.Label>
				<Form.Control
					onChange={change}
					value={guest[element[0]]}
					type={element[2]}
					placeholder={element[3]}
				/>
			</Form.Group>
		) : (
			<Form.Group key={i} className="mb-3" controlId={element[0]}>
				<Form.Label>{element[1]}</Form.Label>
				<Form.Check type={element[2]} label="Check me out" />
			</Form.Group>
		)
	);

	return (
		<Form>
			<div>{list}</div>
			<PrimaryButton click={submit}>Submit</PrimaryButton>
		</Form>
	);
};
