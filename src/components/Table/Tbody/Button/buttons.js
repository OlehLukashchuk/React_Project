import React from "react";
import "../Button/button.css";

function Button() {
  return (
    <div className="tFoot__nav">
      <input type="button" id="previous" value="Previous"></input>
      <input type="button" value="1" className="active"></input>
      <input type="button" value="2"></input>
      <input type="button" value="3"></input>
      <input type="button" value="4"></input>
      <input type="button" value="5"></input>
      <input type="button" id="next" value="Next"></input>
    </div>
  );
}

// class Button extends React.Component {
//   render() {
//     return (
//       <div className="tFoot__nav">
//         <input type="button" id="previous" value="Previous"></input>
//         <input type="button" value="1" className="active"></input>
//         <input type="button" value="2"></input>
//         <input type="button" value="3"></input>
//         <input type="button" value="4"></input>
//         <input type="button" value="5"></input>
//         <input type="button" id="next" value="Next"></input>
//       </div>
//     );
//   }
// }

export default Button;
