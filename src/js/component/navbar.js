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
				<Link to="/" className="navbar-brand mb-0 h1 btn btn-outline-warning border-3 text-warning d-flex"><span className="sw-brand">STAR WARS BLOG</span></Link>

				<div className="btn-group dropstart ms-auto me-2">
					<button className="btn btn-outline-danger border-3 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu dropdown-menu-dark px-4 mx-4" aria-labelledby="dropdownMenuButton1">
						{store.favorites.map((item, index) => {
						return (
							<li classname="dropdown-item dropItem" key={index.toString()}>
								{item.name}
								<button onClick={() => deleteFav(item.name)} className="btn btn-outline-danger ms-1">
									<strong>X</strong>
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
