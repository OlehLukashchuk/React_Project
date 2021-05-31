import React, { memo } from "react";

import "../Search/Search.scss";

interface SearchProps{
  class : string,
  inputSize : string
}

export const Search = memo((props: SearchProps) => {
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
});
