import React from 'react';
import './App.css';
import { Controls } from './components';
import {Header,AboutSection,PortfolioSection,} from './container';




const App = () => (
    <div className="main-content">   
    <main>
    <Header />
    <AboutSection/>
    <PortfolioSection/>
    </main>
    <Controls />

  </div>
);
export default App;