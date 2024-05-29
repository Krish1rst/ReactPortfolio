import React from 'react';
import './Portfolio.css';

import {Project } from './ProjectsData'

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
      {Project.map((item) => {
  if (item.projectType === "js") {
    return (
      <div className="portfolio-item" key={item.id}>
        <div className="p-image">
          <img className="portf-img" src={item.image} alt="" />
        </div>
        <div className="hover-items">
          <h3 className="hover-item-h3">{item.title}</h3>
          <h3 className="hover-item-h3 tex">{item.subTitle}</h3>
          <div className="icons">
            <a href={item.gitHubLink} target="_blank" rel="noreferrer" className="icon">
              {item.icon1}
            </a>
            <a href={item.liveLink} target="_blank" rel="noreferrer" className="icon">
              {item.icon2}
            </a>
          </div>
        </div>
      </div>
    );
  }
  return null;
})}
</div>

      <h2 className="port-text-heading">
        React Projects
      </h2>

      <div className="portfolios">
      {Project.map((item) => {
  if (item.projectType === "react") {
    return (
      <div className="portfolio-item" key={item.id}>
        <div className="p-image">
          <img className="portf-img" src={item.image} alt="" />
        </div>
        <div className="hover-items">
          <h3 className="hover-item-h3">{item.title}</h3>
          <h3 className="hover-item-h3 tex">{item.subTitle}</h3>
          <div className="icons">
            <a href={item.gitHubLink} target="_blank" rel="noreferrer" className="icon">
              {item.icon1}
            </a>
            <a href={item.liveLink} target="_blank" rel="noreferrer" className="icon">
              {item.icon2}
            </a>
          </div>
        </div>
      </div>
    );
  }
  return null;
})}
</div>
    </section>
  );
}

export default PortfolioSection;
