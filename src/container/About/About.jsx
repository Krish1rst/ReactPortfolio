import React from 'react';
import './About.css';
import AboutConatiner from './about-container';
import Timeline from './timeline';
import Stats from './stats';


const AboutSection = () => {
  return (
    <section className="section sec2 active" id="about">
      <div className="main-title">
        <h2>
          About<span className="name-span">me</span>
          <span className="bg-text">mystats</span>
        </h2>
        <AboutConatiner/>
        <Stats/>
        <Timeline/>
      </div>
      
     
     
    </section>
  );
}

export default AboutSection;
