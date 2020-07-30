import React from "react";
export function Navbar() {
	return (
		<nav className="navbar bg-dark">
			<h3 className="text-white font-weight-bold p-2">Start Boostrap</h3>
			<ul className="nav">
				<li className="nav-item">
					<a className="nav-link text-white" href="#">
						Home
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link text-white" href="#">
						About
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link text-white" href="#">
						Services
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link text-white" href="#">
						Contact
					</a>
				</li>
			</ul>
		</nav>
	);
}
