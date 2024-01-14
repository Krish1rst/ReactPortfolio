import React from 'react';
import './App.css';
import { Controls } from './components';
import {Header,AboutSection,PortfolioSection,ContactSection} from './container';




const App = () => (
    <div className="main-content">   
    <main>
    <Header />
    <AboutSection/>
    <PortfolioSection/>
    <ContactSection/>
    </main>
    <Controls />

  </div>
);
export default App;