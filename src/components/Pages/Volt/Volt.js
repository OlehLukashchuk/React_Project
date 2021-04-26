import React from "react";

function Volt(props){
  return(
    <h1>Volt</h1>
  )
}

// class Volt extends React.PureComponent {
//   render(){
//     return (
//       <h1>Volt</h1>
//     )
//   }
// }

export default React.memo(Volt);