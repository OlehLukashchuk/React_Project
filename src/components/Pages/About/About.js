import React from "react";

function About(){
  return(
    <h1>About</h1>
  )
}

// class About extends React.PureComponent {
//   render(){
//     return (
//       <h1>About</h1>
//     )
//   }
// }

export default React.memo(About);