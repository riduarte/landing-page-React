import React from "react";
import PropType from "prop-types";
export const Footer = props => {
	return (
		<div className="container-fluid bg-dark text-white py-4 mt-5">
			<p className="card-text text-center">{props.copyright}</p>
		</div>
	);
};
Footer.propTypes = {
	copyright: PropType.string
};
