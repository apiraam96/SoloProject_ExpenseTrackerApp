import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState.js'

const Balance = () => {
  const context = useContext(GlobalContext)
  let incomeSheets = context.transactions.filter(ele => ele.transactionType == 'INCOME')
  let expenseSheets = context.transactions.filter(ele => ele.transactionType == 'EXPENSE')

  let findTotalIncome = () => {
    let sum = 0;
    for (let i = 0; i < incomeSheets.length; i++) {
      sum += incomeSheets[i].amount
    }
    return sum;
  }

  let findTotalExpense = () => {
    let sum = 0;
    for (let i = 0; i < expenseSheets.length; i++) {
      sum += expenseSheets[i].amount
    }
    return sum;
  }


  let totalIncome = findTotalIncome();
  let totalExpense = findTotalExpense();
  let balance = totalIncome - totalExpense

  return (
    <div className='balance-div'>
      <h3>Total Balance: {balance}</h3>
      <h4>Total Income: {totalIncome}</h4>
      <h4>Total Expense: {totalExpense}</h4>

    </div>
  )
}


export default Balance;