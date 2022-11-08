import React from "react";
import { Tag, Rating } from "../LocationPageComponents";
import PropTypes from "prop-types";

const Infos = ({currentLocation}) => {
    const { title, location, tags, rating, host } = currentLocation;
    
    return (
    <div>
        <div>
            <h1>{title}</h1>
            <h3>{location}</h3>
            <div>
                {tags.map(tag => {
                return <Tag value={tag} key={tag}/> 
                })}
            </div>
        </div>
        <div>
            <div>
                <Rating rating={rating}/>
            </div>
            <div>
                <h2>{host.name}</h2>
                <img src={host.picture} alt={host.name} />
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