import React, { useLayoutEffect, useState } from "react";
import { Switch, Route, Routes, useNavigate } from 'react-router-dom'
import jwt from 'jsonwebtoken'
import NavBar from '../components/NavBar.jsx'
import TransactionForm from '../components/TransactionForm.jsx'
import TransactionList from '../components/TransactionList.jsx'
import Balance from '../components/Balance.jsx';

const FinanceAppPage = () => {
  const navigate = useNavigate()
  const [auth, setAuth] = useState(false)

  useLayoutEffect(() => {
    const authToken = sessionStorage.getItem('authToken')
    if (authToken) {
      const user = jwt.decode(authToken)
      setAuth(true)
      if (!user) {
        sessionStorage.removeItem('authToken')
        navigate('/')
      }
    }
    else {
      navigate('/')
    }
  }, [])

  if (auth) {
    return (
      <>
        <NavBar />
        <TransactionForm />
        <Balance />
        <TransactionList />
      </>
    )
  }
  else {
    return (
      <></>
    )
  }
};

export default FinanceAppPage;