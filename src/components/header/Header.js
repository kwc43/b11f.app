import React,  { Component } from 'react';
import {
  Link
} from "react-router-dom";
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container-fluid">
          <div class="navbar-header">
            <Link to="/">
              <a class="navbar-brand" href="">B1-1F</a>
            </Link>
          </div>
              <ul class="nav navbar-nav navbar-right">
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
