import React from 'react'
// Afin d'avoir le lien
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
//Affichage des locations
// Props : argument fonction des parents aux enfants
const LocationCard = ({ location }) => {
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
LocationCard.propTypes = {
    location: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        cover: PropTypes.string
    })
}


export default LocationCard