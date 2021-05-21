import React from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";

function LoginPage() {
  return (
    <div className="loginContainer">
      <div className="loginBox">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Enter email"
          className="loginBox_input"
        ></input>
        <input
          type="password"
          placeholder="Enter password"
          className="loginBox_input"
        ></input>
        <NavLink to = {{pathname : "volt"}} className="loginBox_back">Back</NavLink>
      </div>
    </div>
  );
}

export default React.memo(LoginPage);
