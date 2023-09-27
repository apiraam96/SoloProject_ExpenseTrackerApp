import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState'
import EachTransaction from './EachTransaction.jsx';

const TransactionList = () => {
  const context = useContext(GlobalContext)
  console.log(context);

  function fetchingTransactions() {
    fetch('/gettransactions')
      .then(res => res.json())
      .then(data => context.setTransactions(data))
  }

  useEffect(() => { fetchingTransactions() }, [context.listRender])
  // fetchingTransactions();

  return (
    <>
      <h3>Transaction History</h3>
      <div className='transaction-list'>
        <ul>
          {context.transactions.toReversed().map((ele, i) => <EachTransaction transaction={ele} key={i} />)}
        </ul>
      </div >
    </>
  )
}

export default TransactionList;