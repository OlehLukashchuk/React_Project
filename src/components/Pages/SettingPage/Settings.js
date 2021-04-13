import React from "react";

function Settings(){
  return(
    <h1>Settings</h1>
  )
}

// class Settings extends React.PureComponent {
//   render(){
//     return (
//       <h1>Settings</h1>
//     )
//   }
// }

export default React.memo(Settings);