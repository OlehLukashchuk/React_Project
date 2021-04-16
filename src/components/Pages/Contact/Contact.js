import React from "react";

function Contact(){
  return(
    <h1>Contact</h1>
  )
}

// class Contact extends React.PureComponent {
//   render(){
//     return (
//       <h1>Contact</h1>
//     )
//   }
// }

export default React.memo(Contact);