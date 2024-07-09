import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand mx-3"> SRRT </Link>
      <div className="nav">
        <Link to="/" className="nav-link"> Home </Link>
        <Link to="/about" className="nav-link"> About </Link>
        <Link to="/signIn" className="nav-link"> SignIn </Link>
        <Link to="/admin" className="nav-link"> Admin </Link>
      </div>
    </nav>
  );
}