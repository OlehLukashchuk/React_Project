import React from "react";
import "../Transaction/style.css";
import { Link } from "react-router-dom";

function Button(props) {
  
  return <Link  to={`/transactions/edit/${props.match}`}>Edit</Link>;
}

export default React.memo(Button);
