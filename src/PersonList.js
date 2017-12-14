import React, { Component } from 'react';

class PersonList extends Component {

  render() {
    return (
        <ul className="PersonList">
            {this.props.people.map((person) => <li key={person.id}>{person.firstName} {person.lastName}</li>)}
        </ul>
    );
  }
}

export default PersonList;
