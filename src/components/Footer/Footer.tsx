import React, { memo } from "react";

import "../Footer/Footer.scss";
import { Link } from "react-router-dom";

export const Footer = memo(() => {
  return (
    <footer>
      <div className="footLeft">
        <p>
          Copyright © 2019-2021{" "}
          <a href="https://themesberg.com/" target="_blank" rel="noreferrer">
            Themesberg
          </a>{" "}
        </p>
      </div>
      <div className="footRight">
        <ul>
          <Link to="/about">About</Link>
          <Link to="/themes">Themes</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </div>
      <div className="footerSettings">
        <span>Settings</span>
      </div>
    </footer>
  );
});

