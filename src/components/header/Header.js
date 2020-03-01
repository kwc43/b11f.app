import React,  { Component } from 'react';
import {
  Link
} from "react-router-dom";
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">
              B11F
            </Link>
          </div>
              <ul className="nav navbar-nav navbar-right">
                 <li>
                  <Link to="/dashboard">
                    Your Dashboard
                  </Link>
                </li>
                <li>
                 <Link to="/">
                   About Us
                 </Link>
               </li><li>
                <Link to="/">
                  Contact Us
                </Link>
              </li>
               </ul>
        </div>
      </nav>
    )
  }
}
