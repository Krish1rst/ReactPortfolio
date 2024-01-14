import React from 'react';
import './App.css';
import { Controls } from './components';
import {Header,AboutSection,} from './container';




const App = () => (
    <div className="main-content">   
    <main>
    <Header />
    <AboutSection/>
    </main>
    <Controls />

  </div>
);
export default App;