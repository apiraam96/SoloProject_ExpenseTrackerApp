import React, { createContext, useReducer, useState } from 'react';
import AppReducer from './AppReducer.js'

//Initial State (mock initial state)

const initialState = {
  transactions: []
}


export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [listRender, setListRender] = useState(false)

  return (<GlobalContext.Provider value={{ transactions: transactions, setTransactions: setTransactions, listRender: listRender, setListRender: setListRender }}>
    {children}
  </GlobalContext.Provider>)
}