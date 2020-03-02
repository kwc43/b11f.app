import React from 'react';

export default class User extends React.Component {
    render() {
        return (
            <div>
                <img className="rounded-circle" src={this.props.user.image} height="50px" width="50px"/>
                <h2 className="d-inline" style={{padding: '20px'}}>{this.props.user.name}</h2>
            </div>
        )
    }
}