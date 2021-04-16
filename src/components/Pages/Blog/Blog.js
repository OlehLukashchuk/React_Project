import React from "react";

function Blog(){
  return(
    <h1>Blog</h1>
  )
}

// class Blog extends React.PureComponent {
//   render(){
//     return (
//       <h1>Blog</h1>
//     )
//   }
// }

export default React.memo(Blog);