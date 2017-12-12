import React, { Component } from 'react';

class PersonEdit extends Component {




  render() {
    return (
        <div className="PersonEdit">
            <span>Editing Person</span>
            <input type="text" name="firstName" value={this.props.selectedPerson.firstName}
            onChange={this.props.changeFirstName} />
            <input type="text" name="lastName" value={this.props.selectedPerson.lastName}
            onChange={this.props.changeLastName} />
        </div>
    );
  }
}

export default PersonEdit;
