import React, { memo } from "react";
import { NavLink } from "react-router-dom";

import "./Sb_child.scss";

interface ItemType {
  icon: string;
  text: string;
}

interface PropsType {
  arrow?: string;
  pro?: string;
  link: string;
  item: ItemType;
}

export const SbChild = memo((props: PropsType) => {
  return (
    <NavLink
      className={`SbChild ${props.arrow ? props.arrow : ""} ${
        props.pro ? props.pro : ""
      }`}
      to={{
        pathname: props.link ? props.link : "defaultLink",
      }}
    >
      <img src={props.item.icon} alt="someImg"></img>
      <span>{props.item.text}</span>
    </NavLink>
  );
});
