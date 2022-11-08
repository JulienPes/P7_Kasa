import React from 'react'
import {AboutImage} from "../assets";
import {Accordeon} from '../components';
import questions from "../data/questions.json";

const About = () => {
  return (
    <div>
      <div className="about-img">
        <img src={AboutImage} alt="Bg banner" className="about-image-banner"/>
      </div>
      
      <section className="about-section">
        {questions.map(question => {
          return <Accordeon question={question} key={question.id} />
        })}
      </section>
    </div>
  )
}

export default About