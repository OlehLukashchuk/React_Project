import React from "react";
import "../Book/style.css";
import { Link } from "react-router-dom";

function Button(props) {

  return <Link  to={`/books/edit/${props.match}`}></Link>;
}

export default React.memo(Button);
