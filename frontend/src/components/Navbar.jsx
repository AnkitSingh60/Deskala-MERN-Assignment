import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
 

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      
      <li className="nav-item">
      <Link className="nav-link" to="/">
            Home
          </Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/login">
            Login
          </Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/register">
            Signup
          </Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/addcandidate">
            Add Candidate
          </Link>
      </li>
    </ul>
    
  </div>
</nav>
  )
}

export default Navbar