
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: {},
			peopleDetails: {},
			planets: {},
			planetsDetails: {}
		},
		actions: {
			getPeople: () => {
				fetch("https://www.swapi.tech/api/people?page=1&limit=100", { method: "GET" })
					.then((response) => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then((data) => {
						
						setStore({ people: data });
					});
			},
			getPeopleDetails: uid => {
				fetch("https://www.swapi.tech/api/people/".concat(uid), { method: "GET" })
					.then((response) => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then((data) => {
						
						setStore({ peopleDetails: data });
					});
			},
			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets?page=1&limit=100", { method: "GET" })
					.then((response) => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then((data) => {
						setStore({ planets: data });
					});
			},
			getPlanetsDetails: uid => {
				fetch("https://www.swapi.tech/api/planets/".concat(uid), { method: "GET" })
					.then((response) => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then((data) => {
						setStore({ planetsDetails: data });
					});
			},
		}
	};
};



export default getState;
