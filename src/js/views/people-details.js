import React from "react"
import {useState, useEffect, useContext} from "react"
import { Context } from "../store/appContext.js"
import {useParams} from "react-router-dom"

function PeopleDetailsComp(){
    
    return (
        <div className="container mt-4 w-75">
            <div className="row">
                <img src={"https://play-lh.googleusercontent.com/proxy/cUAjPVJwQhMnagGUuZUpTauv4D3Qj7kMe5TLl4mbWyOaF9YzBYmqqbL-e8J3Xj6YU2NJhQJghCNXWLPSzR-GkWpbYQA4Hy6WiIAprIYkbZWBpA=w720-h405-rw"} className="imgDetail img-fluid col-6" alt="people_detail_img"/>
                <div className="col-6 text-center">
                    <h1>Nombre</h1>
                    <p>Parrafo gigante</p>
                </div>
            </div>
            <hr className="hrDetail mx-auto"></hr>
            <div className="d-flex justify-content-center">

            </div>
        </div>
        
            
        
    )
}

export {PeopleDetailsComp}