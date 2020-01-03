import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      // <div className="main" style={{ position="fixed" }}>
        
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg sticky-top ">
        <Link to="/" className="navbar-brand">Reddit</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Posts</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Posts</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
          </li>
        </ul>
        </div>
      </nav>

      // </div>
    );
  }
}