import React from "react"
import {Link} from "react-router-dom"

function Card(props){

    const link = "/".concat(props.type, "/", props.uid)
    

    return (
       
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100">
                        <img src="https://i0.wp.com/wipy.tv/wp-content/uploads/2020/01/Baby-Yoda-en-taman%CC%83o-real.jpg?fit=1000%2C600&ssl=1" className="card-img-top" alt="img_card" />
                        <div className="card-body">
                            <h5 className="card-title">{props.name}</h5>
                            <p className="card-text">
                                {props.gender}
                                {props.hairColor}
                                {props.eyeColor}
                            </p>
                        </div>
                    

                        <div className="d-flex p-3">
                            <Link to={link} className="btn btn-outline-primary">Learn more!</Link>
                            <button className="favorito btn btn-outline-warning ms-auto"><i className="far solid fa-heart"></i></button>
                            
                        </div>
                </div>  
            </div>
        </div>
    )
}

export default Card