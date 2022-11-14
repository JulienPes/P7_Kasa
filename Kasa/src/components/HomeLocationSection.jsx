import React from 'react'
import {Location} from '.'
import locations from "../data/data.json";
// Récupération et affichage des données Json
const HomeLocationSection = () => {
  return (
    <section className="location-section">
      <div className="location-section-div">
        {locations.map(location => {
          // Retourne chacun des json avec l'identifiant
          return <Location location={location} key={location.id}/> 
        })}
      </div>
    </section>
  )
}

export default HomeLocationSection