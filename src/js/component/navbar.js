import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container-fluid d-flex">
				<Link to="/" className="navbar-brand mb-0 h1 text-warning d-flex">STAR WARS BLOG</Link>

				<div className="dropdown ms-auto">
					<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						Dropdown button
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						aqui hacer map de li's
					</ul>
				</div>
			</div>

			
		</nav>
	);
};
