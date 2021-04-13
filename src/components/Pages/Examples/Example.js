import React from "react";

function Example(){
  return(
    <h1>Example</h1>
  )
}

// class Example extends React.PureComponent {
//   render(){
//     return (
//       <h1>Example</h1>
//     )
//   }
// }

export default React.memo(Example);