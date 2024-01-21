import React from 'react'
import { useEffect,useState} from 'react';

function Theme() {
const [bodyTheme,setBodyTheme]=useState(true);
useEffect(()=>{
  const storedTheme = localStorage.getItem('selectedTheme');
  if (storedTheme === 'light-mode') {
    document.body.className = 'light-mode';
    setBodyTheme(false);
   } else {
    document.body.className = '';
    setBodyTheme(true);
   }

},[bodyTheme])

const changeTheme=()=>{

  if(bodyTheme){
    document.body.className = 'light-mode';
    localStorage.setItem('selectedTheme', 'light-mode');
    setBodyTheme(false);
  }
  else{
    document.body.className = '';
    localStorage.removeItem('selectedTheme');
    setBodyTheme(true);
  }
}

    return (
        <div className="theme-btn" onClick={changeTheme}>
          <i className="fas fa-adjust i-theme"></i>
        </div>
      );
}

export default Theme