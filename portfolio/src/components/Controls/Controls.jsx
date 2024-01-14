
import './Controls.css';

import React, { useEffect } from 'react';

function Section({ id }) {
  return <section className={`section sec${id}`} id={id}></section>;
}

function Controls() {
  return (
    <div className="controlls">
      <div className="control control-1 active-btn" data-id="home">
        <i className="fas fa-home"></i>
      </div>
      <div className="control control-2" data-id="about">
        <i className="fas fa-user"></i>
      </div>
      <div className="control control-3" data-id="portfolio">
        <i className="fas fa-briefcase"></i>
      </div>
      <div className="control control-5" data-id="contact">
        <i className="fas fa-envelope-open"></i>
      </div>
    </div>
  );
}

function ThemeButton() {
  return (
    <div className="theme-btn">
      <i className="fas fa-adjust i-theme"></i>
    </div>
  );
}

export default function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    const sectBtns = document.querySelectorAll('.controlls');
    const sectBtn = document.querySelectorAll('.control');
    const allSections = document.querySelector('.main-content');

    function PageTransitions() {
      for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function () {
          let currentBtn = document.querySelector('.active-btn');
          if (currentBtn) {
            currentBtn.classList.remove('active-btn');
          }
          this.classList.add('active-btn');
        });
      }

      allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
          sectBtns.forEach(btn => btn.classList.remove('active'));
          e.target.classList.add('active');

          sections.forEach(section => section.classList.remove('active'));
          const element = document.getElementById(id);
          element.classList.add('active');
        }
      });
      const themeBtn = document.querySelector('.theme-btn');
      const element = document.body;
      const storedTheme = localStorage.getItem('selectedTheme');

      if (storedTheme === 'light-mode') {
        element.classList.add('light-mode');
      } else {
        element.classList.remove('light-mode');
      }
      themeBtn.addEventListener('click', () => {
        element.classList.toggle('light-mode');
        if (element.classList.contains('light-mode')) {
          localStorage.setItem('selectedTheme', 'light-mode');
        } else {
          localStorage.removeItem('selectedTheme');
        }
      });
    }

    PageTransitions();
  }, []);

  return (
    <>
    <Controls />
      <ThemeButton />
    </>
  );
}

