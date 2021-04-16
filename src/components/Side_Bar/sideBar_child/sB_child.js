import React from "react";
import "../sideBar_child/sB_child.css";
import { Link } from "react-router-dom";

function SbChild(props) {
  return (
    <Link className={`SbChild ${props.active ? props.active : ''} ${props.arrow ? props.arrow : ''}`} to={props.link ? props.link : 'defaultLink'}>
      <img src={props.item.icon} alt="someImg"></img>
      <span>{props.item.text}</span>
    </Link>
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
