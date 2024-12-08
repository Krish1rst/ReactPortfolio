import React from 'react';
import './About.css';
import Container from './About-container.jsx'
import Stats from './Stats.jsx'
import Timeline from './Timeline.jsx';
import Landscape from '../../components/bgAnimation/Lanscape';
const AboutSection = () => {
  return (
    <section className="section sec2 active" id="about">
      <Landscape />
      <div className="main-title">
        <h2>
          About<span className="name-span">me</span>
          <span className="bg-text">mystats</span>
        </h2>
      </div>
      <Container/>
      <Stats/>
      <Timeline/>
    </section>
  );
}

export default AboutSection;
