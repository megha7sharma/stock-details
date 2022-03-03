import React from 'react'

export default function StockDetails({list, id}) {
  console.log("id",id)
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
            <tr>HIGH: {list.HIGH}</tr>
            <tr>LOW: {list.LOW}</tr>
            <tr>LAST: {list.LAST}</tr>
            <tr>DATE: {list.DATE}</tr>
        </tbody>
      </table>
      </>
  )
}
