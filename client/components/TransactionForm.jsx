import React, { useState } from 'react'
import DatePicker from 'react-date-picker'

const TransactionForm = () => {
  const [expenseOrIncome, setExpenseOrIncome] = useState('EXPENSE');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('Food & Drinks')
  const [date, setDate] = useState('')

  let transactionToPost = {
    transactionType: expenseOrIncome,
    title: title,
    amount: amount,
    date: date,
    category: category
  }

  function postTransaction() {
    fetch('/api', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(transactionToPost)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  }

  function onSubmit(e) {
    e.preventDefault();
    postTransaction();
  }

  return (
    <div className='container transactionwrapper'>
      <form onSubmit={e => e.preventDefault()}>
        <button onClick={() => setExpenseOrIncome('EXPENSE')}>Expense</button>
        <button onClick={() => setExpenseOrIncome('INCOME')}>Income</button>
        <div>
          <label>Title</label>
          <input type='text' onChange={e => setTitle(e.target.value)}></input>
        </div>
        <div>
          <label>Amount</label>
          <input type='text' onChange={e => setAmount(e.target.value)}></input>
        </div>
        <label>Category</label>
        <select onChange={e => setCategory(e.target.value)}>
          <option value="Food & Drinks">Food & Drinks</option>
          <option value="Bills">Bills</option>
          <option value="Transportation">Transportation</option>
          <option value="Miscellaneous">Miscellaneous</option>
        </select>
        <div>
          <label>Transaction Date</label>
          <input type='date' onChange={e => setDate(e.target.value)} />
        </div>
        <div>
          <input type="submit" onClick={(e) => onSubmit(e)} value="Submit Form Here" />
        </div>
      </form>
    </div>
  )
}

export default TransactionForm;