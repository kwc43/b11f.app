import React, { Component } from 'react';

export default class Modal extends Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    return (
      <div className="modal" tabIndex="-1" style={{backgroundColor: 'rgba(0,0,0,0.3)', display: 'block'}}>
        <div className="modal-dialog" style={{margin:"150px auto"}}>
              {this.props.children}
        </div>
      </div>
    );
  }
}
