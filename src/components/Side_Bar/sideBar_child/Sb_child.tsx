import React from "react";
import "./Sb_child.css";
import { NavLink } from "react-router-dom";

interface ItemType {
  icon: string;
  text: string;
}

interface PropsType {
  arrow?: string;
  link: string;
  item: ItemType;
}

function SbChild(props: PropsType) {
  console.log(props);
  return (
    <NavLink
      className={`SbChild ${props.arrow ? props.arrow : ""}`}
      to={{
        pathname: props.link ? props.link : "defaultLink",
      }}
    >
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
