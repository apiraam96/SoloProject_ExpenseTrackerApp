import React, { useState } from 'react'
import DatePicker from 'react-date-picker'

const TransactionForm = () => {
  const [expenseOrIncome, setExpenseOrIncome] = useState('EXPENSE');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('')
  const [date, setDate] = useState('')

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
          <label>Year</label><input type='text' placeholder='2023' width='5px'></input>
          <label>Month</label><input type='text' placeholder='9'></input>
          <label>Day</label><input type='text' placeholder='5'></input>
        </div>
        <div>
          <input type="submit" onClick={(e) => {
            e.preventDefault()
            console.log(title, amount, category, expenseOrIncome)
          }} value="Submit Form Here" />
        </div>
      </form>
    </div>
  )
}

export default TransactionForm;