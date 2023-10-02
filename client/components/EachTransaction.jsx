import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState.js'
import deleteIcon from '../assets/x-circle-fill.svg'

const EachTransaction = ({ transaction }) => {
  const context = useContext(GlobalContext)
  const [style, setStyle] = useState('hide-delete-button')
  // const [expenseIncomeStyle, setExpenseIncomeStyle] = useState('expense-style')
  let expenseIncomeStyle;

  function deleteTransaction() {
    fetch(`/delete/${transaction._id}`, {
      method: 'DELETE',
      headers: {
        'x-access-token': sessionStorage.getItem('authToken'),
        'Content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .then(() => context.setListRender(!context.listRender))
  }

  if (transaction.transactionType == 'INCOME') {
    expenseIncomeStyle = 'income-style'
  }
  else {
    expenseIncomeStyle = 'expense-style'
  }

  const date = new Date(transaction.date)


  return (
    <div className='eachTransaction' onMouseEnter={() => setStyle('show-delete-button')} onMouseLeave={() => setStyle('hide-delete-button')}>
      <div className='titlecategory-and-deletediv'>
        <div className='eachTransaction-titleandcategory'>
          <h3>{transaction.title}</h3>
          <h4 className='category-transactionlist'>{transaction.category ? transaction.category : 'Income'}</h4>
          <h6>{date.toDateString()}</h6>
        </div>
        <div className={style}>
          <img src={deleteIcon} width='30px' onClick={() => deleteTransaction()}></img>
        </div>
      </div>
      <div className='amount-transactionlist'>
        <h4 className={expenseIncomeStyle}>${transaction.amount}</h4>
      </div>
    </div>
  )
}

export default EachTransaction;