import React, { Component } from 'react';
import { connect } from 'react-redux';

class PersonList extends Component {

    get people() {
        return this.props.people.map((person, idx) => {
            return (<a key={idx} href="#" onClick={() => this.props.personSelected(person.id)}>
                <li>{person.firstName} {person.lastName}</li>
            </a>)
        });
    }

    render() {
        return (
            <div>
                <ul>
                    {this.people}
                </ul>
                <input type="button" onClick={() => this.props.newPerson()} value="New Person" />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
       people: state.people 
    }
}

export default connect(mapStateToProps)(PersonList);
