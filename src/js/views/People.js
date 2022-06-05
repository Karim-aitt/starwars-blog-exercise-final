import React, {useState, useContext, useEffect} from "react"
import Card from "../component/Card"
import {Context} from "../store/appContext.js"
import {useParams} from "react-router-dom"

function People(){

    const {store, actions} = useContext(Context)
    const [peopleCard , setPeopleCard] = useState()


    useEffect(() => {
        if (store.people.results != undefined) {
            setPeopleCard(
                store.people.results.map((elem, index) => {
                    
                        return (
                            <Card
                            key={index}
                            name={elem.name}
                            uid={elem.uid}
                            gender={""}
                            hairColor={""}
                            eyeColor={""}
                            type="people"
                            
                            />
                        );

                    
                })
            );
        }
    },
    [store.people]
);

    return (
        <div className="container w-75">
            <p className="h1 text-danger my-4">Characters</p>
            <div className="d-flex scrollmenu p-3">
                {peopleCard}
            </div>
        </div>
    )
}

export {People}