import React, { useState } from 'react'
import StockDetails from './StockDetails';

export default function StockList({list,id,setItem}) {


  const handleList = (e,item) => {
      
       setItem(item);
  }

  return (
    <>
              <tr onClick={(e) => handleList(e,list)} style={(id%2) ? {backgroundColor: "white", cursor: "pointer"} : {backgroundColor: "grey", cursor: "pointer"}}>
                <td style={{ textAlign: "left" }}>{list.STOCK}</td>
                <td style={{ textAlign: "right" }}>{list.DATE}</td>
                <td style={{ textAlign: "right" }}>{list.LAST}</td>
              </tr>

    </>
  )
}
