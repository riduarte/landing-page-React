//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components

import { Navbar } from "./component/navbar.js";
import { Jumbotron } from "./component/jumbotron.js";
import { Card } from "./component/andreacard.js";
import { Footer } from "./component/andreafooter.js";

//render your react application
ReactDOM.render(
	<div>
		<Navbar />
		<Jumbotron
			title="A Warm Welcom!!"
			text="This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."
		/>
		<div className="d-flex justify-content-center container">
			<Card
				imagenUrl="https://via.placeholder.com/500x325"
				title="Card title"
				text="This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action."
				buttonUrl="#"
				button="Go somewhere"
			/>
			<Card
				imagenUrl="https://via.placeholder.com/500x325"
				title="Card title"
				text="This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action."
				buttonUrl="#"
				button="Go somewhere"
			/>
			<Card
				imagenUrl="https://via.placeholder.com/500x325"
				title="Card title"
				text="This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action."
				buttonUrl="#"
				button="Go somewhere"
			/>
			<Card
				imagenUrl="https://via.placeholder.com/500x325"
				title="Card title"
				text="This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action."
				buttonUrl="#"
				button="Go somewhere"
			/>
		</div>
		<Footer copyright="Copyright © Your Website" />
	</div>,
	document.querySelector("#app")
);
