import React,  { Component } from 'react';
import {
  Link
} from "react-router-dom";
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar  fixed-top navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/"> B11F </Link>
          <div className="navbar-nav ml-auto flex-column-reverse flex-md-row">
            <Link className="nav-item nav-link active" to="/dashboard"> Your Dashboard </Link>
            <Link className="nav-item nav-link active" to="/"> About Us </Link>
            <Link className="nav-item nav-link active" to="/"> Contact Us </Link>
          </div>
      </nav>
    )
  }
}
