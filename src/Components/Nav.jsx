import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (

    <div>
        <Link to="/"> Home</Link><br />
        <Link to="/list"> All Todo</Link><br />
        <Link to="/calc"> Calculator</Link><br />
      <Link to="/add"> Add Todo</Link><br />
    </div>
  )
}

export default Nav
