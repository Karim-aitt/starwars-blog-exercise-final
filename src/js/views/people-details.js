import React from "react"
import {useState, useEffect, useContext} from "react"
import { Context } from "../store/appContext.js"
import {useParams} from "react-router-dom"

function PeopleDetailsComp(){

    const {store, actions} = useContext(Context)
    const [detallesGente, setDetallesGente] = useState([])
    const useparams = useParams()

    useEffect(() => {
        actions.getPeopleDetails(useparams.id)
    }, [])

    useEffect(() => {
        if(store.peopleDetails.result != undefined){
            setDetallesGente(
                <>
                <span className="peopleDetailSpan">
                    Name <br />
                    {store.peopleDetails.result.properties.name}
                </span>
                <span className="peopleDetailSpan">
                    Birth Year <br />
                    {store.peopleDetails.result.properties.birth_year}
                </span>
                <span className="peopleDetailSpan">
                    Gender <br />
                    {store.peopleDetails.result.properties.gender}
                </span>
                <span className="peopleDetailSpan">
                    Height <br />
                    {store.peopleDetails.result.properties.height} cm
                </span>
                <span className="peopleDetailSpan">
                    Skin Color <br />
                    {store.peopleDetails.result.properties.skin_color}
                </span>
                <span className="peopleDetailSpan">
                    Eye Color <br />
                    {store.peopleDetails.result.properties.eye_color}
                </span>
						
                </>
            )
        }
    }, [store.peopleDetails])

    

    return (
        <div className="container mt-4 w-75">
            <div className="row">
                <img src={"https://play-lh.googleusercontent.com/proxy/cUAjPVJwQhMnagGUuZUpTauv4D3Qj7kMe5TLl4mbWyOaF9YzBYmqqbL-e8J3Xj6YU2NJhQJghCNXWLPSzR-GkWpbYQA4Hy6WiIAprIYkbZWBpA=w720-h405-rw"} className="imgDetail img-fluid col-6" alt="people_detail_img"/>
                <div className="col-6 text-center">
                    <h1>{detallesGente[1]}</h1>
                    <p>Parrafo gigante</p>
                </div>
            </div>
            <hr className="hrDetail mx-auto"></hr>
            <div className="d-flex justify-content-center">

                {detallesGente != "" ? ( detallesGente ) : 

                        <div className="spinner-border text-danger m-auto" role="status">
							<span className="sr-only">Loading...</span>
						</div>}

                {/*  */}
            </div>
        </div>
        
            
        
    )
}

export {PeopleDetailsComp}