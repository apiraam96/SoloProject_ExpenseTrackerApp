import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

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
      .then(data => {
        console.log(data)
        if (data.user && data.token) {
          sessionStorage.setItem('authToken', data.token)
          navigate('/finance');
        }
        else {
          alert('Incorrect username or password')
        }
      })
  }

  return (
    <div className='login-page'>
      <div className='login-container'>
        <h1>Login to your account</h1>
        <h5>See what's going on with your money</h5>
        <form onSubmit={onSubmit}>
          <div className='form-separation'>
            <label>Email: </label>
            <input type='email' className='inputfield' onChange={(e) => {
              setEmail(e.target.value)
            }}></input>
          </div>
          <div className='form-separation'>
            <label>Password: </label>
            <input type='password' className='inputfield' onChange={(e) => {
              setPassword(e.target.value)
            }}></input>
          </div>
          <div className='login-button' onClick={onSubmit}><p>Login</p></div>
          <h6>Not Registered Yet?  <Link to='/signup' className='registerlink'>Create an account</Link></h6>
        </form>
      </div>
      <div className='logo'>
        <h1>SmartSpend.</h1>
      </div>
    </div>
  )

}

export default LoginPage;