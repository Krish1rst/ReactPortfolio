import React from 'react';
import './About.css';
const AboutConatiner = () => {
  return <>
<div className="about-container">
        <div className="left-about">
          <h4 className="h4-abt">About me</h4>
          <div>
          <p className="p-para">   
          Aspiring frontend developer graduated in 2024, exploring full-stack development.
          </p>  
          </div>
          <div className="about-item ">
            <div className="abt-text">
              <p className="small-text left">B.Tech  -IT(2020-2024) <br />-Rajkiya Engineering College, Ambedkar Nagar, UP,India | CGPA : 7.3 </p>
            </div>
          </div> 
          <div className="about-item">
            <div className="abt-text">
              <p className="small-text left">Intermediate-XII(2019)<br />-Jawahar Navodaya Vidyalaya Ghazipur, UP <br/>Percentage: 81.4%</p>
            </div>
          </div> 
        </div>
        <div className="right-about">
        <div className="about-item">
            <div className="abt-text">
            <a  href="https://www.udemy.com/certificate/UC-443c63f1-abf8-4bff-8242-f2095919a31a/"target="_blank" rel="noreferrer" className="about-icon">
            <i className="fas fa-external-link-alt"></i>
              </a>
              
              <p className="small-text">UDEMY Certification:<br />FUll Python masterclass<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="Backend Skill Icon" className="skill-icon" /><br/>-2022 </p>
              
            </div>
          </div> 
        <div className="about-item">
            <div className="abt-text">
            <a  href="https://www.hackerrank.com/certificates/ec5aa6c1d400"target="_blank" rel="noreferrer" className="about-icon">
            <i className="fas fa-link"></i>
              </a>
              <p className="small-text">CSS Certification :<br /><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="Backend Skill Icon" className="skill-icon" />HackerRank</p>
            </div>
          </div>  
       
        <div className="about-item">
            <div className="abt-text">
            <a  href="https://scl.io/QGSofJ0"target="_blank" rel="noreferrer" className="about-icon">
            <i className="fas fa-external-link-alt"></i>
              </a>
              <p className="small-text">Certification : <br />-Final-exam : Frontend development(Skillsoft)</p>
            </div>
          </div>  
           
        </div>
      </div>

  </>;
};

export default AboutConatiner;
