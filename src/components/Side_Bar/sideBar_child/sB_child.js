import React from 'react';
import '../sideBar_child/sB_child.css';
import logo from '../sideBar_child/sB_child_logo/logo.png'

function SbChild(){
  return (
    <div className='SbChild'>
      <img src={logo}></img>
      <span>Volt React</span>
    </div>
  )
}

function ActiveSbChild(){
  return (
    <div className='activeSb'>
      <img src={logo}></img>
      <span>Volt React</span>
    </div>
  )
}

export  {SbChild,ActiveSbChild};