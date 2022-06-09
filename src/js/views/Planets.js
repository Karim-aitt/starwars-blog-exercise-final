import React, {useState, useContext, useEffect} from "react"
import Card from "../component/Card"
import {Context} from "../store/appContext.js"


function Planets(){
    const {store, actions} = useContext(Context)


    return (
        <div className="container w-75 containerPrinc">
            <p className="h1 text-danger text-center my-4">Planets</p>
            <div className="d-flex scrollmenu p-3">
                {
                    store.planetsData.length >0 ? store.planetsData.map((elem, i) => {
                        return(
                            <Card
                                key={i} 
                                name={elem.properties.name}
                                population={elem.properties.population}
                                terrain={elem.properties.terrain}
                                uid={elem.uid}
                                type={"planets/"}
                            />
                        )  
                    }) : 
                    <div className="spinner-border text-danger m-auto" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                }
            </div>
        </div>
    )
}

export {Planets}