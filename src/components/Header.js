import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav className="text-center">
        <NavLink exact={true} activeClassName='is-active' to='/'>Home</NavLink>|
        <NavLink activeClassName='is-active' to='/about'>About</NavLink>|
        <NavLink activeClassName='is-active' to='/count'>Count</NavLink>
    </nav>
  </header>
)

export default Header
