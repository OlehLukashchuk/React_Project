import React from "react";
import "../sideBar_child/sB_child.css";

function SbChild(props) {
  return (
    <div className={`SbChild ${props.active} ${props.arrow}`}>
      <img src={props.item.icon} alt="someImg"></img>
      <span>{props.item.text}</span>
    </div>
  );
}

// class SbChild extends React.PureComponent {
//   render() {
//     return (
//       <div className={`SbChild ${props.active} ${props.arrow}`}>
//         <img src={props.item.icon} alt="someImg"></img>
//         <span>{props.item.text}</span>
//       </div>
//     );
//   }
// }

export default React.memo(SbChild);
