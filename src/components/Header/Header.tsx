import React from "react";
import Search from "../Search/Search";
import "../Header/Header.css";

function Header() {
  return (
    <header>
      <Search class="inputContainer" inputSize="small" />
      <div className="rightHeader">
        <div className="bellLogo"></div>
        <div className="headerImg"></div>
        <span>Oleh Lukashchuk</span>
      </div>
    </header>
  );
}

// class Header extends React.PureComponent {
//   render() {
//     return (
//       <header>
//         <Search class="inputContainer" inputSize="small" />
//         <div className="rightHeader">
//           <div className="bellLogo"></div>
//           <div className="headerImg"></div>
//           <span>Bonnie Green</span>
//         </div>
//       </header>
//     );
//   }
// }

export default React.memo(Header);
