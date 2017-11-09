import React, { Component } from 'react';
import PersonList from './PersonList';
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

  get view() {
    switch (this.state.view) {
      case 'list':
        return <PersonList
          people={this.state.people}
          personSelected={p => this.personSelected(p)}
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
