import React, { useState } from 'react'
import StockDetails from './StockDetails';

export default function StockList({list,id}) {
  const [show,setShow] = useState(false);

  const handleList = (e,id) => {
      setShow(!show);
      
  }

  return (
    <>
              <tr onClick={() => handleList()} style={(id%2) ? {backgroundColor: "white", cursor: "pointer"} : {backgroundColor: "grey", cursor: "pointer"}}>
                <td style={{ textAlign: "left" }}>{list.STOCK}</td>
                <td style={{ textAlign: "right" }}>{list.DATE}</td>
                <td style={{ textAlign: "right" }}>{list.LAST}</td>
              </tr>
              <div style={{ position: "absolute", backgroundColor: "white", left: "50%"}}>
            {show ? <StockDetails id={id} list={list} /> : null}
            </div>
    </>
  )
}
