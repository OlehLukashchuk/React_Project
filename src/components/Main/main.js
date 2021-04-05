import React from "react";
import SideBar from "../Side_Bar/sideBar";
import Header from "../Header/header";
import { Search } from "../Search/search";
import Table from "../Table/table";
import "../Main/main.css";
import Footer from "../Footer/footer";

function Main() {
  return (
    <main>
      <SideBar />
      <Header />
      <div className="transactionNeck">
        <div className="transactionNeck__left">
          <nav className="left__nav">
            <ol>
              <li></li>
              <li>Volt</li>
              <li>Transactions</li>
            </ol>
          </nav>
          <h4>Transactions</h4>
          <p>Your web analytics dashboard template.</p>
        </div>
        <div className="transactionNeck__right">
          <input type="button" value="Share" id="share"></input>
          <input type="button" value="Export" id="export"></input>
        </div>
      </div>
      <div className="tableSettings">
        <Search class={"largeContainer"} inputSize={"large"} />
        <div className="settingsLogo"></div>
      </div>
      <Table />
      <Footer />
    </main>
  );
}

// class Main extends React.Component {
//   render() {
//     return (
//       <main>
//       <SideBar/>
//       <Header/>
//       <div className="transactionNeck">
//         <div className="transactionNeck__left">
//           <nav className="left__nav">
//             <ol>
//               <li></li>
//               <li>Volt</li>
//               <li>Transactions</li>
//             </ol>
//           </nav>
//           <h4>Transactions</h4>
//           <p>Your web analytics dashboard template.</p>
//         </div>
//         <div className="transactionNeck__right">
//           <input type="button" value="Share" id="share"></input>
//           <input type="button" value="Export" id="export"></input>
//         </div>
//       </div>
//       <div className="tableSettings">
//         <LargerSearch/>
//         <div className="settingsLogo"></div>
//       </div>
//       <Table/>
//       <Footer/>
//     </main>
//     )
//   }
// }

export default Main;
