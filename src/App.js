import React, { Component } from 'react';
import PersonList from './PersonList';
import PersonEdit from './PersonEdit';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      view: 'list',
      selectedPerson: undefined,
      people: [
        { firstName: 'Brent', lastName: 'Gardner' },
        { firstName: 'Rachel', lastName: 'Koldenhoven' }
      ]
    }
  }

  personSelected(person) {
    const newState = JSON.parse(JSON.stringify(this.state));
    newState.selectedPerson = person;
    newState.view = 'edit';
    this.setState(newState);
  }

  personUpdated(person) {
    const newState = JSON.parse(JSON.stringify(this.state));
    newState.selectedPerson = undefined;
    newState.view = 'list';
    this.setState(newState);
  }

  cancel = () => {
    const newState = JSON.parse(JSON.stringify(this.state));
    newState.selectedPerson = undefined;
    newState.view = 'list';
    this.setState(newState);
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
          person={this.state.selectedPerson}
          update={() => this.personUpdated}
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
