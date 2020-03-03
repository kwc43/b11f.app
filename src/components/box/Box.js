import React, {Component} from "react";
import "./Box.css";

export default class Box extends Component{
  render() {
    const hasHeader = this.props.header;
    let header;

    if(hasHeader){
      header =
      <div className="box-header with-border">
        <h2>{this.props.header}</h2>
      </div>;
    }

    return(
      <div className="box">
        {header}
        <div className="box-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}
