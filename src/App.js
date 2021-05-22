import React from "react";
import Main from "./components/Main/main";
import "../src/App.css";

function App() {
  return <Main />;
}

// class App extends React.PureComponent {
//   render() {
//     return (
//     <Main/>
//     )
//   }
// }

export default React.memo(App);
