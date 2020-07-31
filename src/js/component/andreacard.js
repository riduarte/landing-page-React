import React from "react";
import PropType from "prop-types";
import "../../styles/index.scss";

export function Card(props) {
	return (
		<div className="card m-2">
			<img src={props.imagenUrl} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title font-weight-bold">{props.title}</h5>
				<p className="card-text">{props.text}</p>
			</div>
			<div className="card-button m-auto">
				<a href={props.buttonUrl} className="btn btn-primary mb-4">
					{props.button}
				</a>
			</div>
		</div>
	);
}
Card.propTypes = {
	imagenUrl: PropType.string,
	title: PropType.string,
	text: PropType.string,
	buttonUrl: PropType.string,
	button: PropType.string
};
