import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getStockData } from '../redux/actions/actions';
import StockDetails from './StockDetails';

export default function StockList({list,id}) {
  const [show,setShow] = useState(false);

  const handleList = (e,id) => {
      setShow(!show);
      
  }

  return (
    <>
              <tr onClick={() => handleList()} style={{ border: "2px solid black",backgroundColor: "grey", cursor: "pointer" }}>
                <td>{list.STOCK}</td>
                <td>{list.DATE}</td>
                <td>{list.LAST}</td>
              </tr>
              <div style={{ position: "absolute", backgroundColor: "white", left: "50%"}}>
            {show ? <StockDetails id={id} list={list} /> : null}
            </div>
    </>
  )
}
