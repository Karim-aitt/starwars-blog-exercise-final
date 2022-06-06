import React, {useState, useContext, useEffect} from "react"
import Card from "../component/Card"
import {Context} from "../store/appContext.js"
import {useParams} from "react-router-dom"

function People(){
    const {store, actions} = useContext(Context)
    const [carta, setCarta] = useState([])

    console.log(store.people)
    
    
    useEffect(() => 
    {
    //    const loquesea = store.people.map((elem, index) => {
    //     getPeopleData((elem.uid).toString())

    //     console.log(elem.uid)
    //     console.log(store.peopleData.properties)
        
    //     return(
    //         <Card
    //             key={elem.uid} 
    //             name={store.peopleData.name}
    //         />
    //     )  
    //     })
        function getPersonDetail(uid){
            return fetch(`https://www.swapi.tech/api/people/${uid}`, {method: "GET"})

				.then(res => 
				{
					if(!res.ok) throw Error(res.statusText)
					return res.json()
				})
				.then(data => 
				{
					return data
				})
        }


    const auxCartas = []
    for(const person in store.people){
        getPersonDetail(person.uid)
        .then(res => {
            //mapperPersonData(res)
        })
    }

        setCarta(
            auxCartas
        )
        

    }, [store.people])


    return (
        <div className="container w-75">
            <p className="h1 text-danger my-4">Characters</p>
            <div className="d-flex scrollmenu p-3">
                {carta}
            </div>
        </div>
    )
}

export {People}