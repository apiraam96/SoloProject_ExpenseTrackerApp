import React, { useLayoutEffect, useState } from "react";
import { Switch, Route, Routes, useNavigate } from 'react-router-dom'
import jwt from 'jsonwebtoken'
import NavBar from '../components/NavBar.jsx'
import TransactionForm from '../components/TransactionForm.jsx'
import TransactionList from '../components/TransactionList.jsx'
import Balance from '../components/Balance.jsx';
import Chart from '../components/PieChart.jsx';
import BottomWaves from '../assets/bottom_waves.png';
import TopWaves from '../assets/top_waves.png';

const FinanceAppPage = () => {
  const navigate = useNavigate()
  const [auth, setAuth] = useState(false)
  const [name, setName] = useState('')

  useLayoutEffect(() => {
    const authToken = sessionStorage.getItem('authToken')
    if (authToken) {
      const user = jwt.decode(authToken)
      setName(user.name)
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
      <div className='background'>
        <NavBar />
        <div className='page'>
          <img src={TopWaves} className='top-waves'></img>
          <div className="welcome-name-header">
            <h1>Welcome back, {name}!</h1>
            <div className="underline"></div>
          </div>
          <div className='finance-contents-div'>
            <div className='chart-balance-transactionlist'>
              <Balance />
              <Chart />
              <TransactionForm />
            </div>
            <TransactionList />
          </div>
        </div>
        {/* <img src={BottomWaves} className='bottom-waves'></img> */}
      </div>
    )
  }
  else {
    return (
      <></>
    )
  }
};

export default FinanceAppPage;