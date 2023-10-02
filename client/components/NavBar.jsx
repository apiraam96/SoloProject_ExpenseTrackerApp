import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NavBar = () => {
  const navigate = useNavigate()

  function signOut() {
    sessionStorage.removeItem('authToken')
    navigate('/')
  }

  return (
    <div className='navBar'>
      <p>SmartSpend.</p>
      <p onClick={signOut} className='link' >Sign out</p>
    </div>
  )
}

export default NavBar;