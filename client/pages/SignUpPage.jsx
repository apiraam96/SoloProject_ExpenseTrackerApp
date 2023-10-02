import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUpPage = () => {
  const navigate = useNavigate();

  const [newFirstName, setNewFirstName] = useState('')
  const [newLastName, setNewLastName] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')

  function onSubmit(e) {
    e.preventDefault();
    fetch('/signup', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        firstName: newFirstName,
        lastName: newLastName,
        email: newEmail,
        password: newPassword
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data == 'User created') {
          navigate('/')
        }
      })

  }

  return (
    <div className='signup-page'>
      <div className='signup-container'>
        <h1>Create an account</h1>
        <h5>Start your personal finance journey today</h5>
        <form onSubmit={onSubmit}>
          <div className='form-separation'>
            <label>First Name: </label>
            <input type='text' className='inputfield' onChange={(e) => {
              setNewFirstName(e.target.value);
            }}></input>
          </div>
          <div className='form-separation'>
            <label>Last Name: </label>
            <input type='text' className='inputfield' onChange={(e) => {
              setNewLastName(e.target.value);
            }}></input>
          </div>
          <div className='form-separation'>
            <label>Email: </label>
            <input type='email' className='inputfield' onChange={(e) => {
              setNewEmail(e.target.value);
            }}></input>
          </div>
          <div className='form-separation'>
            <label>Password: </label>
            <input type='text' className='inputfield' onChange={(e) => {
              setNewPassword(e.target.value);
            }}></input>
          </div>
          <div className='login-button' onClick={onSubmit}><p>Sign up</p></div>
          <h6>Already have an account? <Link to='/' className='registerlink'>Login here</Link></h6>
        </form>
      </div>
      <div className='logo'>
        <h1>SmartSpend.</h1>
      </div>
    </div>
  )


}

export default SignUpPage;