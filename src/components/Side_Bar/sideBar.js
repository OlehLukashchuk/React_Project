import React from 'react';
import '../Side_Bar/sideBar.css';
import {SbChild,ActiveSbChild} from '../Side_Bar/sideBar_child/sB_child';


function SideBar(){

  const topSbChild = [1,2,3,4,5,6,7];
  const botSbChild = [1,2,3];

  const topArr = topSbChild.map((element,index)=> {
      if(index == 2){
        return <ActiveSbChild/>
      }
      return <SbChild/>
    })

  const botArr = botSbChild.map((element,index)=> {
      return <SbChild/>
    })

  return (

    <aside>
      {
        topArr
      }
      <hr></hr>
      {
        botArr
      }
    </aside>
  )
}

export default SideBar;