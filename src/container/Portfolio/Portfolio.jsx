import React, { useState } from 'react';
import './Portfolio.css';
import { Project } from './ProjectsData';
import Landscape from '../../components/bgAnimation/Lanscape';


const PortfolioSection = () => {
  const [category, setCategory] = useState('All');
  const categories = ['All', ...new Set(Project.map((item) => item.projectType))];

  const handleCategory = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  const filteredProjects = category === 'All' ? Project : Project.filter((item) => item.projectType === category);

  return (
    <section className="section sec3 active" id="portfolio">
      <Landscape />
      <div className="main-title">
        <h2>
          My<span className="name-span">Projects</span><span className="bg-text">Portfolio</span>
        </h2>
      </div>
      <p className="port-text">
        Discover my meticulously crafted projects, showcasing my technical prowess, development skills, and passion for innovative development.
      </p>
      <div className='category-class'>
        {categories.map((item) => (
          <div className="form-btn" key={item}>
            <button className="submit-btn" onClick={() => handleCategory(item)}>
              {item.toUpperCase()} PROJECTS
            </button>
          </div>
        ))}
      </div>

      {category === 'All' && (
        <>
          <h2 className="port-text-heading">JavaScript / 3Js / GSAP</h2>
          <div className="portfolios">
            {Project.map((item) => {
              if (item.projectType === 'js') {
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
                          <i className="fab fa-github icon-i"></i>
                        </a>
                        <a href={item.liveLink} target="_blank" rel="noreferrer" className="icon">
                          <i className="fas fa-eye"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>

          <h2 className="port-text-heading">React Projects</h2>
          <div className="portfolios">
            {Project.map((item) => {
              if (item.projectType === 'react') {
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
                          <i className="fab fa-github icon-i"></i>
                        </a>
                        <a href={item.liveLink} target="_blank" rel="noreferrer" className="icon">
                          <i className="fas fa-eye"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>

          <h2 className="port-text-heading">MERN Stack / Backend</h2>
          <div className="portfolios">
            {Project.map((item) => {
              if (item.projectType === 'mern') {
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
                          <i className="fab fa-github icon-i"></i>
                        </a>
                        <a href={item.liveLink} target="_blank" rel="noreferrer" className="icon">
                          <i className="fas fa-eye"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </>
      )}

      {category !== 'All' && (
        <>
          <h2 className="port-text-heading">{category.charAt(0).toUpperCase() + category.slice(1)} Projects</h2>
          <div className="portfolios">
            {filteredProjects.map((item) => (
              <div className="portfolio-item" key={item.id}>
                <div className="p-image">
                  <img className="portf-img" src={item.image} alt="" />
                </div>
                <div className="hover-items">
                  <h3 className="hover-item-h3">{item.title}</h3>
                  <h3 className="hover-item-h3 tex">{item.subTitle}</h3>
                  <div className="icons">
                    <a href={item.gitHubLink} target="_blank" rel="noreferrer" className="icon">
                      <i className="fab fa-github icon-i"></i>
                    </a>
                    <a href={item.liveLink} target="_blank" rel="noreferrer" className="icon">
                      <i className="fas fa-eye"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default PortfolioSection;
