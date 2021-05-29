import React from "react";
import "../Footer/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
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
          <Link to='/About'>About</Link>
          <Link to='/Themes'>Themes</Link>
          <Link to='/Blog'>Blog</Link>
          <Link to='/Contact'>Contact</Link>
        </ul>
      </div>
      <div className="footerSettings">
        <span>Settings</span>
      </div>
    </footer>
  );
}

// class Footer extends React.PureComponent {
//   render() {
//     return (
//       <footer>
//       <div className="footLeft">
//         <p>
//           Copyright © 2019-2021{" "}
//           <a href="https://themesberg.com/" target="_blank" rel="noreferrer">
//             Themesberg
//           </a>{" "}
//         </p>
//       </div>
//       <div className="footRight">
//         <ul>
//           <Link to='/About'>About</Link>
//           <Link to='/Themes'>Themes</Link>
//           <Link to='/Blog'>Blog</Link>
//           <Link to='/Contact'>Contact</Link>
//         </ul>
//       </div>
//       <div className="footerSettings">
//         <span>Settings</span>
//       </div>
//     );
//   }
// }

export default React.memo(Footer);
