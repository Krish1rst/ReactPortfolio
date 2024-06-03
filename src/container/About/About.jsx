import React from 'react';
import './About.css';

const AboutSection = () => {
  return (
    <section className="section sec2 active" id="about">
      <div className="main-title">
        <h2>
          About<span className="name-span">me</span>
          <span className="bg-text">mystats</span>
        </h2>
      </div>
      <div className="about-container">
        <div className="left-about">
          <h4 className="h4-abt">About me</h4>
          <div>
          <p className="p-para">   
          Aspiring frontend developer graduating in 2024, exploring full-stack development.
          </p>  
          </div>
          <div className="about-item ">
            <div className="abt-text">
              <p className="small-text left">B.Tech  -IT(2020-2024) <br />-Rajkiya Engineering College, Ambedkar Nagar, UP,India | CGPA : 7.2 </p>
            </div>
          </div> 
          <div className="about-item">
            <div className="abt-text">
              <p className="small-text left">Intermediate-XII(2019)<br />-Jawahar Navodya Vidyalaya Ghazipur, UP <br/>Percentage: 81.4%</p>
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
            <p className="prog-title">CSS</p>
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
      <h4 className="stat-title">My Timeline</h4>
      <div className="timeline">
        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <p className="tl-duration">2020-21</p>
          <h5 className="webh5">The Front-End  <span className="wb-dev">-Foundations</span></h5>
          <div className="skill-icons">
            
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="Frontend Skill Icon" className="skill-icon" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="Other Skill Icon" className="skill-icon" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="Other Skill Icon" className="skill-icon" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAUge0y3COiVXXstoLOhEmUh7BURHuBnaoXw&s" alt="Frontend Skill" className="skill-icon" />
            
          </div>
            <p className="wb-p">Started my journey in front-end development at college in 2021.
            Acquired essential skills in HTML, CSS, and JavaScript.
            Built a strong foundation in web design, responsive layouts, and UI principles.
            </p>
        </div>
        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <p className="tl-duration">2022-23</p>
          <h5 className="webh5">Expanding Front-End Horizons </h5>
          <div className="skill-icons">
            
            <img src="https://camo.githubusercontent.com/0568e2de313626b2bd9b96f326941b012d45e9a4db1a23aa78bd8036207e57f8/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f7461696c77696e646373732f7461696c77696e646373732d69636f6e2e737667" alt="Frontend Skill Icon" className="skill-icon" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="Other Skill Icon" className="skill-icon" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="Backend Skill Icon" className="skill-icon" />
            <img src="https://camo.githubusercontent.com/f32e9cca1f0df0138a8f536217daa54ad21b6913642422f32e3c5c623f3a06b9/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6669676d612f6669676d612d69636f6e2e737667" alt="Frontend Skill Icon" className="skill-icon" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="Other Skill Icon" className="skill-icon" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="Backend Skill Icon" className="skill-icon" />
          </div>
          <p className="wb-p">Continued to study front-end development throughout 2022.
              Deepened my knowledge in JavaScript, exploring frameworks and libraries.
              Designed and developed personal projects to apply newfound skills.
          </p>
        </div>
        
        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <p className="tl-duration">2023-Current</p>
          <h5 className="webh5">Transitioning to Full-Stack</h5>
          <div className="skill-icons">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="Other Skill Icon" className="skill-icon" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="Frontend Skill Icon" className="skill-icon" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="Other Skill Icon" className="skill-icon" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="Backend Skill Icon" className="skill-icon" />
            <img src="https://camo.githubusercontent.com/fcafa5ebc1f5f789ae7d012a3ecd8fe7bda49516591caf7c37698f764165d880/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667" alt="Backend Skill Icon" className="skill-icon" />
          </div>
          <p className="wb-p">Preparing for a transition to backend development as part of college curriculum.
                  Excited to explore server-side technologies, databases, and APIs.
                  Ready to merge front-end and backend expertise to become a full-stack developer.
          </p>
        </div>
        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          
          <p className="tl-duration">2023-Current</p>
         
          <h5 className="webh5">The Journey Continues<span className="wb-dev">-Backend</span></h5>
          <div className="skill-icons">
            
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="Frontend Skill Icon" className="skill-icon" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="Other Skill Icon" className="skill-icon" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg" alt="Backend Skill Icon" className="skill-icon" />
            <img src="https://camo.githubusercontent.com/a13ca5b988ada41839ebe4f88455e63419a1b56fcb5eda207794cd1649a61d2c/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676574706f73746d616e2f676574706f73746d616e2d69636f6e2e737667" alt="Other Skill Icon" className="skill-icon" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="Other Skill Icon" className="skill-icon" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="Backend Skill Icon" className="skill-icon" />
          </div>
          <p className="wb-p">Eagerly anticipating future learning and exploration in both    front-end and backend.
            Committed to staying current with industry trends and best practices.
            Excited to contribute to web development projects that involve both sides of the stack.
          </p>
          
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
