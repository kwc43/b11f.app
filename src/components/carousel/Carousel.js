import React,  { Component } from 'react';
import './Carousel.css';
import Modal from "../modal/Modal.js";

export default class Header extends Component {

  constructor(props){
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  toggleLogInModal = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div>
        <Modal show={this.state.isOpen}
          onClose={this.toggleLogInModal}>
          Modal Content
        </Modal>
        <div className="carousel">
          <div className="carousel-inner">
            <div className="item active carousel-image-1">
              <div className="carousel-caption">
                <h1> B11F </h1>
                <p> Ensuring fair price for all </p>
                <p>
                  <button className="btn btn-lg btn-primary" onClick={this.toggleLogInModal}>
                    Sign Up Today
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
