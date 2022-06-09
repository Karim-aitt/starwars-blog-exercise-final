import React, {useState, useContext, useEffect} from "react"
import Card from "../component/Card"
import {Context} from "../store/appContext.js"


function People(){
    const {store, actions} = useContext(Context)



    return (
        <div className="container w-75 mt-3 containerPrinc">
            <p className="h1 text-danger text-center my-4">Characters</p>
            <div className="d-flex scrollmenu p-3">
                {
                    store.peopleData.length >0 ? store.peopleData.map((elem, i) => {
                        return(
                            <Card
                                key={i}
                                name={elem.properties.name}
                                gender={elem.properties.gender}
                                hairColor={elem.properties.hair_color}
                                eyeColor={elem.properties.eye_color}
                                uid={elem.uid}
                                type={"people/"}
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

export {People}