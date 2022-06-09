import React from "react"
import {useState, useEffect, useContext} from "react"
import { Context } from "../store/appContext.js"
import {useParams} from "react-router-dom"

function PeopleDetailsComp(){

    const {store, actions} = useContext(Context)
    const {id} = useParams()
    const uidFake = Number(id)
    console.log(uidFake + " esto es uidFake")

    let objDetail = {}

    
    

    for(let i in store.peopleData){
        if(store.peopleData[i].uid == uidFake){
            objDetail = store.peopleData[i]

        }
    }
        
    
    

    return (
        <div className="container mt-4 w-75 containerPrinc">
            <div className="row">
                <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="imgDetail img-fluid col-6" alt="people_detail_img"/>
                <div className="col-6 text-center detailTexto">
                    <h1>{objDetail.properties.name}</h1>
                    <p>Parrafo gigante lleno de texto random, sin sentido, un dos tres, placeholder</p>
                </div>
            </div>
            <hr className="hrDetail mx-auto"></hr>
            <div className="d-flex justify-content-center">
                <span className="peopleDetailSpan">Name: <br></br>{objDetail.properties.name}</span>
                <span className="peopleDetailSpan">Birth Year: <br></br>{objDetail.properties.birth_year} </span>
                <span className="peopleDetailSpan">Gender: <br></br>{objDetail.properties.gender} </span>
                <span className="peopleDetailSpan">Height: <br></br>{objDetail.properties.height} </span>
                <span className="peopleDetailSpan">Skin Color: <br></br>{objDetail.properties.skin_color} </span>
                <span className="peopleDetailSpan">Eye Color: <br></br>{objDetail.properties.eye_color} </span>
            </div>
        </div>
        
            
        
    )
}

export {PeopleDetailsComp}