import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg   ">
        <Link to="/" className="navbar-brand">Developed by</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item"> <a  href="https://satyasandeep.in/"  className="nav-link">satyasandeep.in</a>
          </li>
          <li className="navbar-item">
          <Link to="/" className="nav-link"></Link>
          </li>
          <li className="navbar-item">
          <Link to="/" className="nav-link"></Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}