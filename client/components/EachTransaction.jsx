import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState.js'

const EachTransaction = ({ transaction }) => {
  const context = useContext(GlobalContext)
  const [style, setStyle] = useState('hide-delete-button')

  function deleteTransaction() {
    fetch(`/delete/${transaction._id}`, {
      method: 'DELETE'
      // headers: { 'Content- type': 'application/json' }
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .then(() => context.setListRender(!context.listRender))
  }

  return (
    <div className='eachTransaction' onMouseEnter={() => setStyle('show-delete-button')} onMouseLeave={() => setStyle('hide-delete-button')}>
      <div>
        <h3>{transaction.title}</h3>
        <h4>{transaction.amount}</h4>
      </div>
      <div className={style}>
        <button className='delete-button' onClick={() => deleteTransaction()}>Delete</button>
      </div>
    </div>
  )
}

export default EachTransaction;