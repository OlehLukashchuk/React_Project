import React from "react";

function Component(){
  return(
    <h1>Component</h1>
  )
}

// class Component extends React.PureComponent {
//   render(){
//     return (
//       <h1>Component</h1>
//     )
//   }
// }

export default React.memo(Component);