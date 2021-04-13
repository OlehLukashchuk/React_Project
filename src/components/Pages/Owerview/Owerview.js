import React from "react";

function Owerview(){
  return(
    <h1>Owerview</h1>
  )
}

// class Owerview extends React.PureComponent {
//   render(){
//     return (
//       <h1>Volt</h1>
//     )
//   }
// }

export default React.memo(Owerview);