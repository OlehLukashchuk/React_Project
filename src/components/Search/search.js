import React from 'react';
import '../Search/search.css'

function Search(){
  return (
    <div className="inputContainer">
      <span className="inputLogo"></span>
      <input type="text" placeholder="Search"></input>
    </div>
  )
}

function LargerSearch(){
  return (
    <div className="largeContainer">
      <span className="inputLogo"></span>
      <input type="text" placeholder="Search" id="large"></input>
    </div>
  )
}


export {Search,LargerSearch};