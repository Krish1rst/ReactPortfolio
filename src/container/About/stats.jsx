import React from 'react';
import './About.css';
const Stats= () => {
  return <>
   <div className="about-stats">
        <h4 className="stat-title">My Skills</h4>
        <div className="progress-bars">
          <div className="progress-bar">
            <p className="prog-title">html5</p>
            <div className="progress-con">
              <p className="prog-text">90%</p>
              <div className="progress">
                <span className="html"></span>
              </div>
            </div>
          </div>
          <div className="progress-bar">
            <p className="prog-title">CSS/GSAP/3Js</p>
            <div className="progress-con">
              <p className="prog-text">85%</p>
              <div className="progress">
                <span className="css"></span>
              </div>
            </div>
          </div>
          <div className="progress-bar">
            <p className="prog-title">Javascript</p>
            <div className="progress-con">
              <p className="prog-text">80%</p>
              <div className="progress">
                <span className="js"></span>
              </div>
            </div>
          </div>
          <div className="progress-bar">
            <p className="prog-title">ReactJs</p>
            <div className="progress-con">
              <p className="prog-text">70%</p>
              <div className="progress">
                <span className="reactjs"></span>
              </div>
            </div>
          </div>
          <div className="progress-bar">
            <p className="prog-title">NodeJs</p>
            <div className="progress-con">
              <p className="prog-text">60%</p>
              <div className="progress">
                <span className="nodejs"></span>
              </div>
            </div>
          </div>
          <div className="progress-bar">
            <p className="prog-title">MongoDB</p>
            <div className="progress-con">
              <p className="prog-text">60%</p>
              <div className="progress">
                <span className="db"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
  </>;
};

export default Stats;