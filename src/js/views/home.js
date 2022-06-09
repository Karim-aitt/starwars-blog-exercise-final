import React, {useEffect} from "react";
import Card from "../component/Card"
import { People } from "./People";
import { Planets } from "./Planets";

import "../../styles/home.css";



export const Home = () => {
	
	return (
		<>
			<div className="container">
				<People />
			</div>

			<div className="container mt-5">
				<Planets />
			</div>	
		</>
	)
};
