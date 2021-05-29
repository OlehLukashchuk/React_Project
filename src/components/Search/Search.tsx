import React from "react";
import "../Search/Search.css";

function Search(props : any) {
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

// class Search extends React.PureComponent {
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
