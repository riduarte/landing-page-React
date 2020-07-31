import React from "react";
import PropType from "prop-types";
import "bootstrap";
//create your first component
export function Jumbotron(props) {
	return (
		<div className="container mt-3">
			<div className="jumbotron">
				<h1 className="display-4">{props.title}</h1>
				<p className="lead">{props.text}</p>
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Call action!!
				</a>
			</div>
		</div>
	);
}
Jumbotron.propTypes = {
	title: PropType.string,
	text: PropType.string
};
