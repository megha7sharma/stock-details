import React from 'react'

export default function StockDetails({item}) {

  return (
    <>
    <p>DETAILS</p>
      <table style={{ border: "2px solid black" }}>
        <thead>
          <tr>
            <th>STOCK: APT</th>
          </tr>
        </thead>
        <tbody>
            <tr>HIGH: {item.HIGH}</tr>
            <tr>LOW: {item.LOW}</tr>
            <tr>LAST: {item.LAST}</tr>
            <tr>DATE: {item.DATE}</tr>
        </tbody>
      </table>
      </>
  )
}
