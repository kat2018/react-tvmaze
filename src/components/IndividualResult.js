import React, { Component } from 'react';

class IndividualResult extends Component {
    render() {
        return (
            <div>
                <img src="{this.props.image}"/>
                <h3>{this.props.name}</h3>
            </div>
        );
    }
}

export default IndividualResult;