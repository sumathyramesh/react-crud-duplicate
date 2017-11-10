import React, { Component } from 'react';
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

  get selectedPerson() {
    return this.state.people.find(p => p.id === this.state.selectedPersonId);
  }

  get view() {
    switch (this.state.view) {
      case 'list':
        return <PersonList
          people={this.state.people}
          personSelected={p => this.personSelected(p)}
        />
      case 'edit':
        return <PersonEdit
          person={this.selectedPerson}
          update={(person) => this.personUpdated(person)}
          delete={(person) => this.personDeleted(person)}
          cancel={this.cancel}
        />
      default:
        throw new Error('Unknown view: ', this.state.view)
    }
  }

  render() {
    return this.view;
  }
}

export default App;
