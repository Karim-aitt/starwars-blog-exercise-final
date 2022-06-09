import React, {useEffect, useState, useContext} from "react"
import {Link} from "react-router-dom"
import {Context} from "../store/appContext.js"


function Card(props){

    const {store, actions} = useContext(Context)
    
    const obj = {
        uid: props.uid,
        name: props.name
    }

    

    let flag = 0; // segun la flag, mostrará un tipo de carta u otra
    if(props.type === "people/"){flag = 0} //flag para people
    else if(props.type === "planets/"){flag = 1} //flag para planets
    else{flag = 2} //flag para vehicles

    const handleAdd = () => {
        actions.addFavorites(obj)
        
    }

    return (
       
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100">
                        <img src={props.type === "people/" ? `https://starwars-visualguide.com/assets/img/characters/${props.uid}.jpg` : props.type === "planets/" ? `https://starwars-visualguide.com/assets/img/planets/${props.uid}.jpg` : "vehicles"} className="card-img-top" alt="img_card" />
                        <div className="card-body">
                            <h5 className="card-title">{props.name}</h5>

                            {flag === 0 ? 
                            <p className="card-text text-wrap">
                                Gender: {props.gender} <br></br>
                                Hair Color: {props.hairColor} <br></br>
                                Eye Color: {props.eyeColor}
                            </p> : flag === 1 ?
                            <p className="card-text text-wrap">
                                Population: {props.population} <br></br>
                                Terrain: {props.terrain} <br></br>
                            </p> : 
                            <p className="card-text">
                                vehicless
                            </p>}
                            
                        </div>


                        <div className="d-flex p-3">
                            <Link to={props.type + (props.uid)} className="btn btn-outline-danger">Learn more!</Link>
                            <button onClick={handleAdd} className="favorito btn btn-danger ms-auto"><i className="far solid fa-heart"></i></button>
                            
                        </div>
                </div>  
            </div>
        </div>
    )
}

export default Card