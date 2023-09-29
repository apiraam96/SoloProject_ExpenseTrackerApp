import React from "react";
import { Switch, Route, Routes, Link } from 'react-router-dom'
import { GlobalProvider } from './context/GlobalState'
import NavBar from './components/NavBar.jsx'
import TransactionForm from './components/TransactionForm.jsx'
import TransactionList from './components/TransactionList.jsx'
import Balance from './components/Balance.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignUpPage from "./pages/SignUpPage.jsx";
import FinanceAppPage from './pages/FinanceAppPage.jsx'

const App = () => {

  return (
    <GlobalProvider>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/finance' element={<FinanceAppPage />} />
      </Routes>
    </GlobalProvider>
  )
};

export default App;