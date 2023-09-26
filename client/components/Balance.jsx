import React, { useState } from 'react'

const Balance = () => {
  const [balance, setBalance] = useState(0)
  const [totalIncome, setTotalIncome] = useState(0)
  const [totalExpense, setTotalExpense] = useState(0)

  function totalInfo() {
    fetch('/total')
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  }

  return (
    <div>
      <h4>Total Balance</h4>

    </div>
  )
}


export default Balance;