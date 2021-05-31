import React, { memo } from "react";

import {Search} from "../Search";
import "../Header/Header.scss";

export const Header = memo(() => {
  return (
    <header>
      <Search class="inputContainer" inputSize="small" />
      <div className="rightHeader">
        <div className="bellLogo"></div>
        <div className="headerImg"></div>
        <span>Oleh Lukashchuk</span>
      </div>
    </header>
  );
});
