import React from "react";
import '../Transaction/style.css'

function Button(){
  const onClick = () => {
    console.log('hi')
  }
  return(
    <button onClick={onClick}>Add</button>
  )
}

export default React.memo(Button)