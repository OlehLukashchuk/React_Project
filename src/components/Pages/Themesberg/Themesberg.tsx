import React from "react";

function Themesberg(){
  return(
    <h1>Themesberg</h1>
  )
}

// class Themesberg extends React.PureComponent {
//   render(){
//     return (
//       <h1>Themesberg</h1>
//     )
//   }
// }

export default React.memo(Themesberg);