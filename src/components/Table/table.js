import React from 'react';
import '../Table/table.css';
import Tbody from '../Table/Tbody/tbody'
import Button from '../Table/Tbody/Button/buttons'
const tbodyTD = [1,2,3,4,5,6,7,8,9,10];

function Table(){
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
          {
            tbodyTD.map((element)=>{
              return <Tbody/>
            })
          }
        </tbody>
      </table>
      <div className="tFoot">
          <Button/>
          <div className="tFoot__info">Showing <b>10</b> out of <b>25</b> entries</div>
      </div>
      </div>
    </div>
  )
}


export default Table;