import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';

function Navbar() {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login")
    }
  return (
    <nav className="navbar-nav">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          LOGO
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/upload" className="nav-links">
              Upload
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link to="/contact" className="nav-links">
              Contact
            </Link>
          </li> */}
        </ul>
        <div className="logout-container">
            <button onClick={handleLogout} className="logout-btn">
            Logout
            </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
