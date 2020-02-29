import React,  { Component } from 'react';
import './Carousel.css';

export default class Header extends Component {
  render() {
    return (
      <div class="carousel">
        <div class="carousel-inner">
          <div class="item active carousel-image-1">
            <div class="carousel-caption">
              <h1> B1-1F </h1>
              <p> Ensuring fair price for all </p>
              <p>
                <a class="btn btn-lg btn-primary">
                  Sign Up Today
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
