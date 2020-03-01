import React, { Component } from 'react';

export default class Modal extends Component {
  render(){
    return(
      <div className="modal-content">
        <div className="modal-header text-center">
          <h4>Sign up</h4>
        </div>
        <div className="modal-body mx-3">
          <div className="md-form mb-5">
            <label>Your name</label>
            <input type="text" id="orangeForm-name" className="form-control validate"></input>
          </div>
          <div className="md-form mb-5">
            <label>Your email</label>
            <input type="email" id="orangeForm-email" className="form-control validate"></input>
          </div>

          <div className="md-form mb-4">
            <label>Your password</label>
            <input type="password" id="orangeForm-pass" className="form-control validate"></input>
          </div>

        </div>
        <div className="modal-footer">
          <button className="btn btn-primary" onClick={this.props.onClose}>Sign up</button>
        </div>
      </div>
    )
  }
}
