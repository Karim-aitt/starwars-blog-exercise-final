import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { People } from "./views/People"
import { PeopleDetailsComp } from "./views/people-details";
import { PlanetsDetailsComp } from "./views/planets-details";
import { Planets } from "./views/Planets"
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";



//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="divLayout">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route exact path="/" element={<Home />} />
						
						{/* <Route exact path="/people" element={<People />} /> */}
						<Route exact path="/people/:id" element={<PeopleDetailsComp />} />
						
						{/* <Route exact path="/planets" element={<Planets />} /> */}
						<Route exact path="/planets/:id" element={<PlanetsDetailsComp />} />
						
						<Route path="*" element={<h1>Not found</h1>} />	
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
