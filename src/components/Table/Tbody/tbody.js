import React from 'react';
import '../Tbody/tbody.css'


function Tbody(props){

  return (
    <tr>
      <td id="number">{props.item.number}</td>
      <td id="plan">{props.item.bill}</td>
      <td id="issue">{props.item.issue}</td>
      <td id="due">{props.item.due}</td>
      <td id="price">{props.item.total}</td>
      <td id="paid" className={`${props.paid} ${props.due} ${props.canceled}`}>{props.item.status}</td>
      <td id="dots"></td>

    </tr>
  )
}

// class Tbody extends React.Component{
//   render(){
//     return (
//       <tr>
//       <td id="number">{props.item.number}</td>
//       <td id="plan">{props.item.bill}</td>
//       <td id="issue">{props.item.issue}</td>
//       <td id="due">{props.item.due}</td>
//       <td id="price">{props.item.total}</td>
//       <td id="paid" className={`${props.paid} ${props.due} ${props.canceled}`}>{props.item.status}</td>
//       <td id="dots"></td>

//     </tr>
//     )
//   }
// }

export default Tbody;