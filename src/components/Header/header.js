import React from 'react';
import {Search} from '../Search/search'
import '../Header/header.css'

function Header(){
  return(
    <header>
      <Search/>
      <div className="rightHeader">
        <div className="bellLogo"></div>
        <div className="headerImg"></div>
        <span>Bonnie Green</span>
      </div>
    </header>
  )
}

export default Header;