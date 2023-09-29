import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const TransactionForm = () => {
  const transactionListRender = useContext(GlobalContext)

  const [expenseOrIncome, setExpenseOrIncome] = useState('EXPENSE');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('Food & Drinks')
  const [date, setDate] = useState('yyy-mm-dd')

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
      headers: {
        'x-access-token': sessionStorage.getItem('authToken'),
        'Content-type': 'application/json'
      },
      body: JSON.stringify(transactionToPost)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        transactionListRender.setListRender(!transactionListRender.listRender);
      })
  }

  function onSubmit(e) {
    e.preventDefault();
    if (title == '' || !parseInt(amount) || date == 'yyy-mm-dd') {
      alert('Incorrect value in fields!')
    }
    else {
      console.log(transactionToPost)
      postTransaction();
    }
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
          <input type='number' onChange={e => setAmount(e.target.value)}></input>
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
          <input type="submit" onClick={(e) => onSubmit(e)} value="Submit Transaction" />
        </div>
      </form>
    </div>
  )
}

export default TransactionForm;