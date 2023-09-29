import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navBar'>
      <p>Personal Finance App</p>
      <p><Link to='/' className='link'>Sign out</Link></p>
    </div>
  )
}

export default NavBar;