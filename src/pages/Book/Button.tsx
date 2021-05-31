import React from "react";

import { Link } from "react-router-dom";

import "./Style.scss";

interface PropsType {
  match: Number;
}

function Button(props: PropsType) {
  return <Link to={`/books/edit/${props.match}`}></Link>;
}

export default React.memo(Button);
