import React from "react";
import "../Search/search.css";

function Search(props) {
  return (
    <div className={props.class}>
      <span className="inputLogo"></span>
      <input
        type="text"
        placeholder="Search"
        className={props.inputSize}
      ></input>
    </div>
  );
}

// class Seach extends React.Component {
//   render() {
//     return (
//       <div className={props.class}>
//         <span className="inputLogo"></span>
//         <input
//           type="text"
//           placeholder="Search"
//           className={props.inputSize}
//         ></input>
//       </div>
//     );
//   }
// }

export { Search };
