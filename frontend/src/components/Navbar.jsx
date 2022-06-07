import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/")
  };

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
  <Link  onClick={logout} className="nav-link logout" to="/">
            Logout 
            
          </Link>
</nav>
  )
}

export default Navbar