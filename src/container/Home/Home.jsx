import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { images } from '../../constants';
import './Home.css';

export default function Home() {
  const nameRef = useRef(null);
  const descRef = useRef(null);
  const btnRef = useRef(null);
  const imageRef = useRef(null);
  const hShapeRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, y: 200, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'power3.out', delay: 0.5 }
    );

    
    tl.fromTo(
      hShapeRef.current,
      { opacity: 0, scale: 0.2, rotate: -45 },
      {
        opacity: 1,
        scale: 1,
        rotate: 0,
        duration: 1.2,
        ease: 'elastic.out(1, 0.5)',
        delay: 2,
      }
    )
      .fromTo(
        nameRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' },
        '-=0.8'
      )
      .fromTo(
        descRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' },
        '-=1'
      )
      .fromTo(
        btnRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, ease: 'elastic.out(1, 0.5)' },
        '-=0.7'
      )
      .add(() => {
        gsap.to(btnRef.current, {
          y: 10, 
          repeat: -1, 
          yoyo: true, 
          duration: 0.6,
          ease: 'power1.inOut',
        });
      });
  }, []);

  const handleHover = () => {
    gsap.to(nameRef.current, {
      color: '#ff5722',
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  const handleHoverLeave = () => {
    gsap.to(nameRef.current, {
      scale: 1,
      color: 'var(--grey0)',
      duration: 0.5,
      ease: 'power2.in',
    });
  };

  return (
    <header className="section sec1 header active" id="home">
      <div className="header-content">
        <div className="left-header">
          <div className="h-shape" ref={hShapeRef}></div>
          <div className="image" ref={imageRef}>
            <img src={images.profile} alt="Profile" />
          </div>
        </div>
        <div className="right-header">
          <h1
            className="name"
            ref={nameRef}
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverLeave}
          >
            Hi , I'm <span className="name-span">Kɾιšhɳα Yαԃαʋ</span>.
            A web developer.
          </h1>
          <p ref={descRef}>
            Embark on an immersive digital journey through my captivating developer portfolio, where elegant code intertwines with imaginative solutions, pushing the boundaries of innovation with every meticulously crafted line.
          </p>
          <div className="btn-con" ref={btnRef}>
            <a
              href="https://github.com/Krish1rst"
              rel="noreferrer"
              target="_blank"
              className="main-btn"
            >
              <span className="btn-text">Download CV</span>
              <span className="btn-icon">
                <i className="fas fa-download"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
