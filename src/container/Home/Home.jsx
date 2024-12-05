import React from 'react';
import {images} from '../../constants';
import './Home.css';



export default function Home() {
  return (
    <header className="section sec1 header active" id="home">
      <div className="header-content">
        <div className="left-header">
          <div className="h-shape"></div>
          <div className="image">
            <img src={images.profile} alt="" />
          </div>
        </div>
        <div className="right-header">
          <h1 className="name">
            Hi , I'm <span className="name-span">Kɾιšhɳα Yαԃαʋ</span>.
            A web developer.
          </h1>
          <p>
            Embark on an immersive digital journey through my captivating developer portfolio, where elegant code intertwines with imaginative solutions, pushing the boundaries of innovation with every meticulously crafted line.
          </p>
          <div className="btn-con">
            <a href="https://github.com/Krish1rst" rel="noreferrer "target="_blank"className="main-btn">
              <span className="btn-text">Download CV</span>
              <span className="btn-icon"><i className="fas fa-download"></i></span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}


