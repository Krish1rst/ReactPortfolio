import React from 'react';
import './App.css';
import { Controls } from './components';
import {Header} from './container';




const App = () => (
    <div className="main-content">   
    <main>
    <Header />
    </main>
    <Controls />
  </div>
);
export default App;