import React from 'react'

const EachTransaction = ({ transaction }) => {
  return (
    <div className='eachTransaction'>
      <h3>{transaction.title}</h3>
      <h4>{transaction.amount}</h4>
    </div>
  )
}

export default EachTransaction;