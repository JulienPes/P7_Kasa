import React from 'react'
import { Link } from "react-router-dom";
//Affichage des locations
const Location = ({ location }) => {
    console.log(location)
    const { title, id, cover } = location;
    return (
        // Liens vers location 
        <Link to={`/location/${id}`}>
            <article className="location">
                <img src={cover} alt="Logement" className="location-img" />
                <h2 className="location-title">{title}</h2>
            </article>
        </Link>
    )
}

export default Location