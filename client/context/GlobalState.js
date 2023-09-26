import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer.js'

//Initial State (mock initial state)

const initialState = {
  transactions: [{
    transactionType: 'EXPENSE',
    title: 'Test1',
    amount: 100,
    date: '2023-09-25',
    category: 'Food'
  }, {
    transactionType: 'EXPENSE',
    title: 'Test2',
    amount: 200,
    date: '2023-09-25',
    category: 'Food'
  }, {
    transactionType: 'INCOME',
    title: 'Test3',
    amount: 300,
    date: '2023-09-25',
    category: 'Food'
  }
  ]
}


export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (<GlobalContext.Provider value={{ transactions: state.transactions }}>
    {children}
  </GlobalContext.Provider>)
}