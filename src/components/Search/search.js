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

// class Seach extends React.PureComponent {
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

export default React.memo(Search);
