import React from 'react'
import Banner from "../assets/Background-About.png";
import Accordeon from '../components/Accordeon';
import questions from "../data/questions.json";

const About = () => {
  return (
    <div>
      <div className="about-img">
        <img src={Banner} alt="Bg banner" className="about-image-banner"/>
      </div> 
      <section>
        {questions.map(question => {
          return <Accordeon question={question} key={question.id} />
        })}
      </section>
    </div>
  )
}

export default About