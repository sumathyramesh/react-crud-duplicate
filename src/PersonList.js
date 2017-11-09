import React, { Component } from 'react';

class PersonList extends Component {

  render() {
    return (
        <ul>
            {this.props.people.map((person) => <li>{person.firstName} {person.lastName}</li>)}
        </ul>
    );
  }
}

export default PersonList;
