import React from "react";
import "../Footer/footer.css";
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
//         <div className="footLeft">
//           <p>
//             Copyright © 2019-2021{" "}
//             <a href="https://themesberg.com/" target="_blank" rel="noreferrer">
//               Themesberg
//             </a>{" "}
//           </p>
//         </div>
//         <div className="footRight">
//           <ul>
//             <li>
//               <a href="https://some.com">About</a>
//             </li>
//             <li>
//               <a href="https://some.com">Themes</a>
//             </li>
//             <li>
//               <a href="https://some.com">Blog</a>
//             </li>
//             <li>
//               <a href="https://some.com">Contact</a>
//             </li>
//           </ul>
//         </div>
//         <div className="footerSettings">
//           <span>Settings</span>
//         </div>
//       </footer>
//     );
//   }
// }

export default React.memo(Footer);
