import React, { memo } from "react";
import { NavLink } from "react-router-dom";

import "./Login.scss";

export const LoginPage = memo(() => {
  return (
    <div className="loginContainer">
      <div className="loginBox">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Enter email"
          className="loginBox_input loginBox_email"
        ></input>
        <input
          type="password"
          placeholder="Enter password"
          className="loginBox_input"
        ></input>
        <NavLink to={{ pathname: "volt" }} className="loginBox_back">
          Back
        </NavLink>
        <button className="loginBox_login">Login</button>
      </div>
    </div>
  );
});
