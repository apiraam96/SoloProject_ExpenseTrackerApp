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
      <h2>Balance: {(balance < 0) ? `-$${-balance}` : `$${balance}`}</h2>
      <div className='balance-IncomeExpenseText'>
        <h4>Total Income: </h4>
        <h4 className='income-style money'>${totalIncome}</h4>
      </div>
      <div className='balance-IncomeExpenseText'>
        <h4>Total Expense: </h4>
        <h4 className='expense-style money'>${totalExpense}</h4>
      </div>

    </div>
  )
}


export default Balance;
