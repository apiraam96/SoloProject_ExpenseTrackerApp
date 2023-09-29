import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUpPage = () => {

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
      .then(data => console.log(data))
  }

  return (
    <form onSubmit={onSubmit}>
      <label>First Name: </label>
      <input type='text' onChange={(e) => {
        setNewFirstName(e.target.value);
      }}></input>
      <label>Last Name: </label>
      <input type='text' onChange={(e) => {
        setNewLastName(e.target.value);
      }}></input>
      <label>Email: </label>
      <input type='email' onChange={(e) => {
        setNewEmail(e.target.value);
      }}></input>
      <label>Password: </label>
      <input type='text' onChange={(e) => {
        setNewPassword(e.target.value);
      }}></input>
      <input type='submit' value='Sign Up'></input>
      <h5>Login <Link to='/'>Here</Link></h5>
    </form>
  )


}

export default SignUpPage;