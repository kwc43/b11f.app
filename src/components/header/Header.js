import React,  { Component } from 'react';
import {
  Link
} from "react-router-dom";
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/"> B11F </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse navbar-right" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="/dashboard"> Your Dashboard </Link>
            <Link className="nav-item nav-link active" to="/"> About Us </Link>
            <Link className="nav-item nav-link active" to="/"> Contact Us </Link>
          </div>
        </div>
      </nav>
    )
  }
}
