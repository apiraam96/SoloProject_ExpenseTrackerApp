import React from "react";
import { Switch, Route } from 'react-router-dom'

const App = () => {
  const test = {
    transactionType: 'EXPENSE',
    title: 'Test',
    amount: 100,
    dateYear: 2023,
    dateMonth: 9,
    dateDay: 23,
    category: 'Food'
  }

  function testDatabase() {
    fetch('/api', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(test)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  }
  return (
    <div>
      <h1>asdfasodfj this is React, Finance App</h1>
      <button onClick={testDatabase}>Submit</button>
    </div>
  )
}

export default App;