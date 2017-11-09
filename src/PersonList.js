import React, { Component } from 'react';

class PersonList extends Component {

    get people() {
        return this.props.people.map((person, idx) => {
            return (<a key={idx} href="#" onClick={() => this.props.personSelected(person)}>
                <li>{person.firstName} {person.lastName}</li>
            </a>)
        });
    }

    render() {
        return (
            <ul>
                {this.people}
            </ul>
        );
    }
}

export default PersonList;
