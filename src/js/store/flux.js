// import {getPeople, getPeopleData } from "../apiFetch"

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [], //esto es un objeto con un array con objetos de cada personaje
			peopleData: {}, //esto es un objeto con las key:values de los datos
			planets: {},
			planetsData: {}
		},
		actions: {
			getPeople: () =>
			{
				fetch(`https://www.swapi.tech/api/people?page=1&limit=10`, {method: "GET"})

				.then(res => 
				{
					if(!res.ok) throw Error(res.statusText)
					return res.json()
				})
				.then(data => 
				{
					setStore({people: data.results})
				})
			},
			setPeopleData: (uid) =>
			{
				
			}
		}
		}
	};





export default getState;
