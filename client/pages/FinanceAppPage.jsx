import React from "react";
import { Switch, Route, Routes } from 'react-router-dom'
import NavBar from '../components/NavBar.jsx'
import TransactionForm from '../components/TransactionForm.jsx'
import TransactionList from '../components/TransactionList.jsx'
import Balance from '../components/Balance.jsx';

const App = () => {

  return (
    <>
      <NavBar />
      <TransactionForm />
      <Balance />
      <TransactionList />
    </>
  )
};

export default App;