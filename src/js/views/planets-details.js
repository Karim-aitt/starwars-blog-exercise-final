import React from "react"
import {useState, useEffect, useContext} from "react"
import { Context } from "../store/appContext.js"
import {useParams} from "react-router-dom"

function PlanetsDetailsComp(){

    const {store, actions} = useContext(Context)
    const {id} = useParams()
    const uidFake = Number(id)

    let objDetail = {}

    
    

    for(let i in store.planetsData){
        if(store.planetsData[i].uid == uidFake){
            objDetail = store.planetsData[i]

        }
    }

    return (
        <div className="container mt-4 w-75">
            <div className="row">
                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className="imgDetail img-fluid col-6" alt="planets_detail_img"/>
                <div className="col-6 text-center">
                    <h1>{objDetail.properties.name}</h1>
                    <p>Parrafo gigante lleno de texto random, sin sentido, un dos tres, placeholder</p>
                </div>
            </div>
            <hr className="hrDetail mx-auto"></hr>
            <div className="d-flex justify-content-center">
                <span className="peopleDetailSpan">Name: <br></br>{objDetail.properties.name}</span>
                <span className="peopleDetailSpan">Climate: <br></br>{objDetail.properties.climate} </span>
                <span className="peopleDetailSpan">Population: <br></br>{objDetail.properties.population} </span>
                <span className="peopleDetailSpan">Orbital Period: <br></br>{objDetail.properties.orbital_period} </span>
                <span className="peopleDetailSpan">Rotation Period: <br></br>{objDetail.properties.rotation_period} </span>
                <span className="peopleDetailSpan">Diameter: <br></br>{objDetail.properties.diameter} </span>
            </div>
        </div>
        
            
        
    )
}

export {PlanetsDetailsComp}