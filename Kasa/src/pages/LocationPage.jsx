// Afin de rajouter plus facilements plusieurs enfants
import React, {Fragment} from 'react'
// useParams = search params , Navigate = pour la navigation  
import { useParams, Navigate } from 'react-router-dom';
import locations from "../data/data.json";
// Déstructuration : dans le chemin componnents récupéré..
import { Carousel, Infos } from "../components/LocationPageComponents"
import { Accordeon } from '../components';

const LocationPage = () => {
  const { id } = useParams();
  // const location = boucle sur tableau d'objet et cherche l'objet avec le même id
  const location = locations.find(location => location.id === id)
  if (location === undefined) {
    return <Navigate to="*" />;
  }

    return (
      <Fragment>
        <Carousel pictures={location.pictures} key={"Carousel"}/>
        <Infos currentLocation={location}/>
        <div className="more-infos">
          <Accordeon content={{title: "Description", reply: location.description }} />
          <Accordeon content={{title: "Équipements", equipments: location.equipments }} />
        </div>
      </Fragment>
    )
}

export default LocationPage
