import React from "react";

function Started(){
  return(
    <h1>Started</h1>
  )
}

// class Started extends React.PureComponent {
//   render(){
//     return (
//       <h1>Started</h1>
//     )
//   }
// }

export default React.memo(Started);