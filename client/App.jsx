import React from "react";
import { Switch, Route } from 'react-router-dom'
import { GlobalProvider } from './context/GlobalState'
import NavBar from './components/NavBar.jsx'
import TransactionForm from './components/TransactionForm.jsx'
import TransactionList from './components/TransactionList.jsx'


const App = () => {

  return (
    <GlobalProvider>
      <NavBar />
      <h1>Personal Finance App</h1>
      <TransactionForm />
      <TransactionList />
    </GlobalProvider>
  )
};

export default App;