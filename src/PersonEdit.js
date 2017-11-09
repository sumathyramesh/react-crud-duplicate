import React, { Component } from 'react';

class PersonEdit extends Component {

    render() {
        return (
            <div>
                <div>
                    <span>First Name</span>
                    <input type="text" value={this.props.person.firstName} />
                </div>
                <div>
                    <span>Last Name</span>
                    <input type="text" value={this.props.person.lastName} />
                </div>
                <input type="button" onClick={this.props.update} value="Save"/>
                <input type="button" onClick={this.props.cancel} value="Cancel"/>
            </div>
        );
    }
}

export default PersonEdit;
