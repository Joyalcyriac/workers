import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'
function Navigation() {
  return (
    <nav class='navbar'>
        <h1 class='head'>workers connect</h1>
      <ul class='nav-list'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;