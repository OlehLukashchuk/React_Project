import React from "react";

function Table(){
  return(
    <h1>Table</h1>
  )
}

// class Table extends React.PureComponent {
//   render(){
//     return (
//       <h1>Table</h1>
//     )
//   }
// }

export default React.memo(Table);