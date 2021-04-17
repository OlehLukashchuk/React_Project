import React from "react";
import "../sideBar_child/sB_child.css";
import {NavLink} from "react-router-dom";

function SbChild(props) {
  return (
    <NavLink className={`SbChild ${props.arrow ? props.arrow : ''}`} to={{
      pathname : props.link ? props.link : 'defaultLink',
      search : '?key=value'
    }}>
      <img src={props.item.icon} alt="someImg"></img>
      <span>{props.item.text}</span>
    </NavLink>
  );
}

// class SbChild extends React.PureComponent {
//   constructor(props) {
//    super(props);
//   }
//   render() {
//     return (
//       <NavLink className={`SbChild ${this.props.arrow ? this.props.arrow : ''}`} to={this.props.link ? this.props.link : 'defaultLink'}>
//         <img src={this.props.item.icon} alt="someImg"></img>
//         <span>{this.props.item.text}</span>
//       </NavLink>
//     );
//   }
// }

export default React.memo(SbChild);
