import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <span className='logo'>REDUX STORE</span>
      <div>
        <NavLink className='navLink' to='/'>
          Home
        </NavLink>
        <NavLink className='navLink' to='/cart'>
          Cart
        </NavLink>
        <span className='cartCount'>Cart items: 10</span>
      </div>
    </div>
  )
}
export default Navbar
