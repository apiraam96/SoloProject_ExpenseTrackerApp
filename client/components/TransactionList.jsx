import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'
import EachTransaction from './EachTransaction.jsx';

const TransactionList = () => {
  const context = useContext(GlobalContext)
  console.log(context);
  return (
    <>
      <h3>Transaction History</h3>
      <div className='transaction-list'>
        <ul>
          {context.transactions.map((ele, i) => <EachTransaction transaction={ele} key={i} />)}
        </ul>
      </div >
    </>
  )
}

export default TransactionList;