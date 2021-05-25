import React from "react";

function Plugin(){
  return(
    <h1>Plugin</h1>
  )
}

// class Plugin extends React.PureComponent {
//   render(){
//     return (
//       <h1>Plugin</h1>
//     )
//   }
// }

export default React.memo(Plugin);