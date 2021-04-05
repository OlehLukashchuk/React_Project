import React from "react";
import "../Table/table.css";
import Tbody from "../Table/Tbody/tbody";
import Button from "../Table/Tbody/Button/buttons";
const tbodyTD = [
  {
    number: "300500",
    bill: "Platinum Subscription Plan",
    issue: "31 Mar 2021",
    due: "30 Apr 2021",
    total: "	$799.00",
    status: "Paid",
  },
  {
    number: "300499",
    bill: "Platinum Subscription Plan",
    issue: "30 Mar 2021",
    due: "30 Apr 2021",
    total: "	$799.00",
    status: "Paid",
  },
  {
    number: "300498",
    bill: "Platinum Subscription Plan",
    issue: "30 Mar 2021",
    due: "30 Apr 2021",
    total: "	$799.00",
    status: "Paid",
  },
  {
    number: "300497",
    bill: "Flexible Subscription Plan",
    issue: "29 Mar 2021",
    due: "29 Apr 2021",
    total: "	$233.00",
    status: "Paid",
  },
  {
    number: "300496",
    bill: "Gold Subscription Plan",
    issue: "28 Feb 2021",
    due: "31 Mar 2021",
    total: "	$533.00",
    status: "Due",
  },
  {
    number: "300495",
    bill: "Gold Subscription Plan",
    issue: "28 Feb 2021",
    due: "29 Mar 2021",
    total: "	$533.00",
    status: "Due",
  },
  {
    number: "300494",
    bill: "Flexible Subscription Plan",
    issue: "28 Feb 2021",
    due: "28 Mar 2021",
    total: "	$233.00",
    status: "Due",
  },
  {
    number: "300493",
    bill: "Gold Subscription Plan",
    issue: "12 Feb 2021",
    due: "12 Mar 2021",
    total: "	$533.00",
    status: "Canceled",
  },
  {
    number: "300492",
    bill: "Platinum Subscription Plan",
    issue: "01 Feb 2021",
    due: "01 Jan 2021",
    total: "	$799.00",
    status: "Canceled",
  },
  {
    number: "300491",
    bill: "Platinum Subscription Plan",
    issue: "26 Mar 2021",
    due: "26 Apr 2021",
    total: "	$799.00",
    status: "Paid",
  },
];

function Table() {
  return (
    <div className="table-wraper">
      <div className="tableBody">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>BILL FOR</th>
              <th>ISSUE DATE</th>
              <th>DUE DATE</th>
              <th>TOTAL</th>
              <th>STATUS</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tbodyTD.map((element) => {
              if (element.status === "Paid") {
                return <Tbody item={element} paid="paid" due="" canceled="" />;
              } else if (element.status === "Due") {
                return <Tbody item={element} due="due" paid="" canceled="" />;
              } else if (element.status === "Canceled") {
                return (
                  <Tbody item={element} due="" paid="" canceled="canceled" />
                );
              }
              return <Tbody item={element} paid="" due="" canceled="" />;
            })}
          </tbody>
        </table>
        <div className="tFoot">
          <Button />
          <div className="tFoot__info">
            Showing <b>10</b> out of <b>25</b> entries
          </div>
        </div>
      </div>
    </div>
  );
}

// class Table extends React.Component {
//   render() {
//     return (
//       <div className="table-wraper">
//         <div className="tableBody">
//           <table>
//             <thead>
//               <tr>
//                 <th>#</th>
//                 <th>BILL FOR</th>
//                 <th>ISSUE DATE</th>
//                 <th>DUE DATE</th>
//                 <th>TOTAL</th>
//                 <th>STATUS</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {tbodyTD.map((element) => {
//                 if (element.status === "Paid") {
//                   return (
//                     <Tbody item={element} paid="paid" due="" canceled="" />
//                   );
//                 } else if (element.status === "Due") {
//                   return <Tbody item={element} due="due" paid="" canceled="" />;
//                 } else if (element.status === "Canceled") {
//                   return (
//                     <Tbody item={element} due="" paid="" canceled="canceled" />
//                   );
//                 }
//                 return <Tbody item={element} paid="" due="" canceled="" />;
//               })}
//             </tbody>
//           </table>
//           <div className="tFoot">
//             <Button />
//             <div className="tFoot__info">
//               Showing <b>10</b> out of <b>25</b> entries
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default Table;
