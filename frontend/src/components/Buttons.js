import React from "react";
import { Link } from "react-router-dom";

export const PrimaryButton = ({ children, href, click }) => {
	// { href, click, name }

	return (
		<Link to={href}>
			<button onClick={click}>{children}</button>
		</Link>
	);
};
