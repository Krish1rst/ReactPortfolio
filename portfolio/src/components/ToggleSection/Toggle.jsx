import React from 'react'
import { useState } from 'react';
import {Header,AboutSection,PortfolioSection,ContactSection} from '../../container';
import { NavLink } from 'react-router-dom';

function Toggle() {  
  return (
    <div className="controlls">
      <NavLink to='/'className={({isActive})=>(isActive?'active-btn active control control-1':'control control-1')}><i className="fas fa-home"></i></NavLink>

      <NavLink to='/AboutSection'className={({isActive})=>(isActive?'active-btn control control-2':'control control-2')}><i className="fas fa-user"></i></NavLink>

      <NavLink to='/PortfolioSection'className={({isActive})=>(isActive?'active-btn control control-3':'control control-3')}><i className="fas fa-briefcase"></i></NavLink>
      
      <NavLink to='/ContactSection'className={({isActive})=>(isActive?'active-btn control control-4':'control control-4')}><i className="fas fa-envelope-open"></i></NavLink>
    </div>
  );
}

export default Toggle