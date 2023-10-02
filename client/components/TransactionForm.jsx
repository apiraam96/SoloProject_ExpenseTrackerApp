import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const TransactionForm = () => {
  const transactionListRender = useContext(GlobalContext)

  const [expenseOrIncome, setExpenseOrIncome] = useState('EXPENSE');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food & Drinks')
  const [date, setDate] = useState('yyy-mm-dd')
  const [incomeButton, setIncomeButton] = useState('no-click-income-button')
  const [expenseButton, setExpenseButton] = useState('click-expense-button')

  const [showCategory, setShowCategory] = useState('show-category')
  let transactionToPost;

  function postTransaction() {
    if (showCategory == 'show-category') {
      transactionToPost = {
        transactionType: expenseOrIncome,
        title: title,
        amount: amount,
        date: date,
        category: category
      }
    }
    else {
      transactionToPost = {
        transactionType: expenseOrIncome,
        title: title,
        amount: amount,
        date: date,
      }
    }
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
    setTitle('');
    setAmount('');
  }

  return (
    <div className='transactionwrapper'>
      <h2>Make a Transaction</h2>
      <form onSubmit={e => e.preventDefault()}>
        <div className='expense-income-buttons'>
          <div className={expenseButton} onClick={() => {
            setExpenseButton('click-expense-button')
            setIncomeButton('no-click-income-button')
            setExpenseOrIncome('EXPENSE')
            setShowCategory('show-category')
          }}>Expense</div>
          <div className={incomeButton} onClick={() => {
            setExpenseButton('no-click-expense-button')
            setIncomeButton('click-income-button')
            setExpenseOrIncome('INCOME')
            setShowCategory('no-category')
          }}>Income</div>
        </div>
        <div className='transaction-form-separation'>
          <label>Title</label>
          <input type='text' onChange={e => setTitle(e.target.value)} value={title}></input>
        </div>
        <div className='transaction-form-separation'>
          <label>Amount</label>
          <input type='text' onChange={e => setAmount(e.target.value)} value={amount}></input>
        </div>
        <div className='transaction-form-separation'>
          <label>Transaction Date</label>
          <input type='date' onChange={e => setDate(e.target.value)} />
        </div>
        <div className={showCategory}>
          <label>Category</label>
          <select className='transaction-form-category' onChange={e => setCategory(e.target.value)}>
            <option value="Food & Drinks">Food & Drinks</option>
            <option value="Bills">Bills</option>
            <option value="Transportation">Transportation</option>
            <option value="Miscellaneous">Miscellaneous</option>
          </select>
        </div>
        <div className='submit-transaction-button' onClick={onSubmit}>
          <p>Submit Transaction</p>
        </div>
      </form>
    </div>
  )
}

export default TransactionForm;