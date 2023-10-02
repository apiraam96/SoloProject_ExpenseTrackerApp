import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState'
import EachTransaction from './EachTransaction.jsx';

const TransactionList = () => {
  const context = useContext(GlobalContext)
  console.log(context);

  function fetchingTransactions() {
    fetch('/gettransactions', {
      headers: {
        'x-access-token': sessionStorage.getItem('authToken')
      }
    })
      .then(res => res.json())
      .then(data => context.setTransactions(data))
  }

  useEffect(() => { fetchingTransactions() }, [context.listRender])
  // fetchingTransactions();

  return (
    <div className='transactionlist-div'>
      <h2>Transaction History</h2>
      <div className='transaction-list'>
        <ul>
          {context.transactions.toReversed().map((ele, i) => <EachTransaction transaction={ele} key={i} />)}
        </ul>
      </div >
    </div>
  )
}

export default TransactionList;