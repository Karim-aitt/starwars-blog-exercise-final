import React from "react"
import Card from "../component/Card"

function Planets(){

    return (
        <div className="container w-75">
            <p className="h1 text-danger my-4">Planets</p>
            <div className="d-flex scrollmenu p-3">
                <Card link={"/planets-details"}/>
            </div>
        
        </div>
    )
}

export {Planets}