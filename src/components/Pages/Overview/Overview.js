import React from "react";

function Overview(){
  return(
    <h1>Overview</h1>
  )
}

// class Overview extends React.PureComponent {
//   render(){
//     return (
//       <h1>Volt</h1>
//     )
//   }
// }

export default React.memo(Overview);