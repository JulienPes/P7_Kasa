import React, {useState} from 'react'
import { ChevronLeft, ChevronRight } from '../../assets'
import PropTypes from "prop-types";
// Déclare un tableau avec un setter me permettant de changer la valeur d'une variable
// useState est un hook 
// set pour changer valeur 
// Réupère la props "pictures"
const Carousel = ({ pictures }) => {
  const [index, setIndex] = useState(0);
// Mesure la longueur du tableau et fait un -1
  const showPreviousPhoto = () => {
    // Si index est à 0 alors faire -1
    if(index === 0) setIndex(pictures.length-1)
    // Autre faire -1
    else setIndex(index-1);
  }

  const showNextPhoto = () => {
    // si index est à -1 alors mettre a 0
    if(index === pictures.length-1) setIndex(0)
    // Autre faire +1
    else setIndex(index+1)
  }

  return (
    <div className="carousel">
      <button className="previous-btn carousel-btn" onClick={showPreviousPhoto}>
        <img src={ChevronLeft} alt="Previous" />
      </button>
      <img src={pictures[index]} alt="Logement" className="carousel-img"/>
      <button className="next-btn carousel-btn" onClick={showNextPhoto}>
        <img src={ChevronRight} alt="Next" />
      </button>
    </div>
  )
}

Carousel.propTypes = {
  pictures: PropTypes.array,
}

export default Carousel