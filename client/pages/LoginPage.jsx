import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function onSubmit(e) {
    e.preventDefault()
    fetch('/login', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <label>Email:</label>
        <input type='email' onChange={(e) => {
          setEmail(e.target.value)
        }}></input>
        <label>Password:</label>
        <input type='text' onChange={(e) => {
          setPassword(e.target.value)
        }}></input>
        <input type='submit' value='Login'></input>
        <h5>Sign up <Link to='/signup'>Here</Link></h5>
        <h5>Go to Finance app <Link to='/finance'>here</Link></h5>
      </form>
    </>
  )

}

export default LoginPage;