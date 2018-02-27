import React, { Component } from 'react';
import { connect } from 'react-redux';

import PersonList from './PersonList';
import PersonEdit from './PersonEdit';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      view: 'list',
      selectedPersonId: undefined,
      people: [
        { id: 1, firstName: 'Brent', lastName: 'Gardner' },
        { id: 2, firstName: 'Rachel', lastName: 'Koldenhoven' }
      ]
    }
  }

  personSelected(personId) {
    const newState = JSON.parse(JSON.stringify(this.state));
    newState.selectedPersonId = personId;
    newState.view = 'edit';
    this.setState(newState);
  }

  personUpdated(person) {
    const newState = JSON.parse(JSON.stringify(this.state));
    const newPerson = newState.people.find(p => p.id === person.id);
    Object.assign(newPerson, person);
    newState.selectedPersonId = undefined;
    newState.view = 'list';
    this.setState(newState);
  }

  personDeleted(person) {
    const newState = JSON.parse(JSON.stringify(this.state));
    newState.people = newState.people.filter(p => p.id !== person.id);
    newState.selectedPersonId = undefined;
    newState.view = 'list';
    this.setState(newState);
  }

  cancel = () => {
    const newState = JSON.parse(JSON.stringify(this.state));
    newState.selectedPersonId = undefined;
    newState.view = 'list';
    this.setState(newState);
  }

  createPerson = () => {
    const newState = JSON.parse(JSON.stringify(this.state));
    const newPerson = {
      id: newState.people.reduce((acc, cur) => Math.max(acc, cur.id), -1) + 1,
      firstName: '',
      lastName: ''
    };
    newState.people.push(newPerson);
    newState.selectedPersonId = newPerson.id;
    newState.view = 'add';
    this.setState(newState);
  }

  get selectedPerson() {
    return this.state.people.find(p => p.id === this.state.selectedPersonId);
  }

  render() {
    console.log('render', this.state);
    switch (this.props.view) {
      case 'list':
        return <PersonList
          newPerson={this.createPerson}
        />
      case 'edit':
        return <PersonEdit
          person={this.selectedPerson}
          update={(p) => this.personUpdated(p)}
          delete={(p) => this.personDeleted(p)}
          cancel={this.cancel}
        />
      case 'add':
        return <PersonEdit
          person={this.selectedPerson}
          update={(p) => this.personUpdated(p)}
          delete={(p) => this.personDeleted(p)}
          cancel={(p) => this.personDeleted(p)}
        />
      default:
        throw new Error('Unknown view: ', this.state.view)
    }
  }
}

const mapStateToProps = (state) => {
  return {
    view: state.view
  }
}

export default connect(mapStateToProps)(App);
