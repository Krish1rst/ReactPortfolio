import React from 'react';
import './Portfolio.css';
import {images} from '../../constants';


const PortfolioSection = () => {

  return (
    <section className="section sec3 active" id="portfolio">
      <div className="main-title">
        <h2>
          My<span className="name-span">Projects</span><span className="bg-text">Portfolio</span>
        </h2>
      </div>
      <p className="port-text">
        Discover my meticulously crafted projects, showcasing my technical prowess, development skills, and passion for innovative development.
      </p>
      <h2 className="port-text-heading">
        Javascript Projects
      </h2>
      <div className="portfolios">
        <div className="portfolio-item">
          <div className="p-image">
            <img className="portf-img" src={images.project1} alt="" />
          </div>
          <div className="hover-items">
            <h3 className="hover-item-h3">BLOG WEBSITE </h3>
            <h3 className="hover-item-h3 tex"> PROTOTYPE</h3>
            <div className="icons">
              <a href="https://github.com/Krish1rst/codealpha_BlogWebsite"className="icon">
              <i className="fab fa-github icon-i "></i>
              </a>
              <a href="https://krish1rst.github.io/codealpha_BlogWebsite/"className="icon">
              <i className="fas fa-eye"></i>
              </a>              
            </div>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="p-image">
            <img className="portf-img" src={images.project2} alt="" />
          </div>

          <div className="hover-items">
            <h3 className="hover-item-h3">PORTFOLIO WEBSITE </h3>
            <h3 className="hover-item-h3 tex">PORTFOLIO PROTOTYPE</h3>
            <div className="icons">
              <a href="https://github.com/Krish1rst/Portfolio"className="icon">
              <i className="fab fa-github icon-i "></i>
              </a>
              <a href="https://krish1rst.github.io/Portfolio/"className="icon">
              <i className="fas fa-eye"></i>
              </a>              
            </div>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="p-image">
            <img className="portf-img" src={images.project3} alt="" />
          </div>

          <div className="hover-items">
            <h3 className="hover-item-h3">RESUME BUILDER</h3>
            <div className="icons">
               <a href="https://github.com/Krish1rst/ResumeBuilder"className="icon">
              <i className="fab fa-github icon-i "></i>
              </a>
              <a href="https://krish1rst.github.io/ResumeBuilder/"className="icon">
              <i className="fas fa-eye"></i>
              </a>              
            </div>
          </div>
        </div>
        
        
      </div>
      <h2 className="port-text-heading">
        React Projects
      </h2>
      <div className="portfolios">
      <div className="portfolio-item">
          <div className="p-image">
            <img className="portf-img" src={images.project4} alt="" />
          </div>

          <div className="hover-items">
            <h3 className="hover-item-h3">TEXTUTILS</h3>
            <h3 className="hover-item-h3 tex">TEXT MANIPULATION PROJECT </h3>
            <div className="icons">
            <a href="https://github.com/Krish1rst/TextUtils_Krishna"className="icon">
              <i className="fab fa-github icon-i "></i>
              </a>
              <a href="https://spectacular-youtiao-b8c139.netlify.app/"className="icon">
              <i className="fas fa-eye"></i>
              </a>              
            </div>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="p-image">
            <img className="portf-img" src={images.project5} alt="" />
          </div>

          <div className="hover-items">
            <h3 className="hover-item-h3">NewsDaily</h3>
            <h3 className="hover-item-h3 tex">NEWS API PROJECT</h3>
            <div className="icons">
              <a href="https://github.com/Krish1rst/NewsDaily"className="icon">
              <i className="fab fa-github icon-i "></i>
              </a>
              <a href="#"className="icon">
              <i className="fas fa-eye"></i>
              </a>              
            </div>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="p-image">
            <img className="portf-img" src={images.project6} alt="" />
          </div>

          <div className="hover-items">
            <h3 className="hover-item-h3">PORTFOLIO</h3>
            <h3 className="hover-item-h3 tex">MY PERSONAL PORTFOLIO </h3>
            <div className="icons">
              <a href="#"className="icon">
              <i className="fab fa-github icon-i "></i>
              </a>
              <a href="#"className="icon">
              <i className="fas fa-eye"></i>
              </a>              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
