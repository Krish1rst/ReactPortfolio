import React from 'react'
import { useEffect } from 'react';

function Theme() {
    useEffect(() => {
        function PageTransitions() {
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
        <div className="theme-btn">
          <i className="fas fa-adjust i-theme"></i>
        </div>
      );
}

export default Theme