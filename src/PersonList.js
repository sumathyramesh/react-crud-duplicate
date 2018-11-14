import React, {Component} from 'react';

class PersonList extends Component {

    constructor(props){
      super(props);
    }

    render() {
        return (
            <ul className="PersonList">
                {this.props.people.map((person) => <li key={person.id}><a onClick={() => this.props.updateView("PersonEdit", person.firstName, person.lastName, person.id)}>{person.firstName} {person.lastName}</a></li>)}
            </ul>
        );
    }
}

export default PersonList;
