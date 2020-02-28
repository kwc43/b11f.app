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
              <a class="navbar-brand" href="">
                B1-1F
              </a>
            </Link>
            <div id="navbar navbar-collapse">
              <ul clas="nav navbar-nav navbar-right">
                <li>
                  <Link to="/dashboard">
                    <a>Dashoard</a>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <a>About</a>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <a>Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
            <form class="navbar-form navbar-right">
              <input class="form-control" type="text" placeholder="Search...">
              </input>
            </form>
          </div>
        </div>
      </nav>
    )
  }
}
