import React, {useState, useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import {Context} from "../store/appContext.js"

export const Navbar = () => {

	const {store, actions} = useContext(Context)
	const [fav, setFav] = useState([])

	const deleteFav = (name) => {
		let newArray = store.favorites.filter(item => item.name != name)

		actions.delFavorites(newArray)
	}

		
	
	


	return (
		<nav className="navbar navbar-dark bg-dark">
			<div className="container-fluid d-flex">
				<Link to="/" className="navbar-brand mb-0 h1 text-warning d-flex">STAR WARS BLOG</Link>

				<div className="btn-group dropstart ms-auto me-2">
					<button className="btn btn-outline-danger dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton1">
						{store.favorites.map((item, index) => {
						return (
							<li classname="dropdown-item dropItem" key={index.toString()}>
								{item.name}
								<button onClick={() => deleteFav(item.name)} className="btn btn-outline-danger">
									<strong className="">X</strong>
								</button>
							</li>
						)
						})}
					</ul>
				</div>
			</div>

			
		</nav>
	);
};
