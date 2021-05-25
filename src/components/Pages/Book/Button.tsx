import React from "react";
import "../Book/Style.css";
import { Link } from "react-router-dom";

interface PropsType {
  match : Number
}

function Button(props:PropsType) {
  return <Link to={`/books/edit/${props.match}`}></Link>;
}

export default React.memo(Button);
