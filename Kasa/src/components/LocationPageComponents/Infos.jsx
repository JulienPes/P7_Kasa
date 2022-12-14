import React from "react";
import { Tag, Rating } from ".";
import PropTypes from "prop-types";

const Infos = ({currentLocation}) => {
    const { title, location, tags, rating, host } = currentLocation;
    // Key = identifiant unique 
    return (
    <div className="location-basic-infos">
        <div className="location-container">
            <div className="location-infos">
                <h1>{title}</h1>
                <h3 className="location-infos-location">{location}</h3>
                <div className="tag-container">
                    {tags.map((tag, index) => {
                    return <Tag value={tag} key={index}/> 
                    })}
                </div>
            </div>
            <div className="host-infos">
                <div>
                    <Rating rating={rating}/>
                </div>
                <div className="host-box">
                    <h2>{host.name}</h2>
                    <img src={host.picture} alt={host.name} className="host-img"/>
                </div>
            </div>
        </div>
    </div>
  )
}

Infos.propTypes = {
    currentLocation : PropTypes.shape({
        title: PropTypes.string,
        location: PropTypes.string,
        tags: PropTypes.array,
        rating: PropTypes.string,
        host: PropTypes.object,
    })
}

export default Infos