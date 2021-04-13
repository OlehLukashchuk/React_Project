import React from "react";

function Themes(){
  return(
    <h1>Themes</h1>
  )
}

// class Themes extends React.PureComponent {
//   render(){
//     return (
//       <h1>Themes</h1>
//     )
//   }
// }

export default React.memo(Themes);