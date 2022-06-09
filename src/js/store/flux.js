// import {getPeople, getPeopleData } from "../apiFetch"

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [], //esto es un array con objetos de cada personaje
			peopleData: [], //esto es un array con objetos con las key:values de los datos
			planets: [],
			planetsData: [],
			favorites: [],
			favoritesDos: []
		},
		actions: {
			getPeople: () =>
			{
					fetch("https://www.swapi.tech/api/people/")

				.then(res => 
				{
					if(!res.ok) throw Error(res.statusText)
					return res.json()
				})
				.then(data => 
				{
					console.log(data)
					setStore({people: data.results})
				})
				
			},
		
			getAllPeople: () => {
				
				for(let i = 1; i <= 10; i++){

					fetch(`https://www.swapi.tech/api/people/${i}`)
					.then(res => {
						if(!res.ok) throw Error(res.statusText)
						return res.json()
					})
					.then(data => {
						
						setStore({peopleData: getStore().peopleData.concat(data.result) })
						
					})
				}
			},
			getPlanets: () => {

				fetch(`https://www.swapi.tech/api/planets/`, {method: "GET"})

				.then(res => 
				{
					if(!res.ok) throw Error(res.statusText)
					return res.json()
				})
				.then(data => 
				{
					setStore({planets: data.results})
				})
			},

			getAllPlanets: () => {

				for(let i = 1; i <= 10; i++){

					fetch(`https://www.swapi.tech/api/planets/${i}`)
					.then(res => {
						if(!res.ok) throw Error(res.statusText)
						return res.json()
					})
					.then(data => {
						setStore({planetsData: getStore().planetsData.concat(data.result) })
					})
				}
			},
			

			addFavorites: (obj) => {
				setStore({favorites: [...getStore().favorites, obj]})
				console.log(getStore().favorites)
			},

			delFavorites: (array) => {
				setStore({favorites: array})
			}


			
			
		}
		}
	};





export default getState;
