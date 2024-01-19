import React from 'react';
import './App.css';
import { Controls } from './components';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Home,AboutSection,PortfolioSection,ContactSection} from './container';



const App = () => (
  <BrowserRouter>
  <Routes>
    <Route path='/'element={<Home />}/>
    <Route path='AboutSection'element={<AboutSection/>}/>
    <Route path='PortfolioSection'element={<PortfolioSection/>}/>
    <Route path='ContactSection'element={<ContactSection/> }/>
  </Routes>
    <Controls />
  </BrowserRouter>
   
);
export default App;