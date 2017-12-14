import React, { Component } from 'react';
import PersonList from './PersonList';
import './App.css';

const uuid = require('uuid4');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      people: [
        {firstName: 'Margaret', lastName: 'Hamilton', id: '81d6ff6c-10f4-4db0-88f2-1ebf789b7779'},
        {firstName: 'Donald', lastName: 'Knuth', id: 'f515b8de-5916-47db-9fa8-75efe4a5ebb2'}
      ]
    }
  }

  render() {
    return <PersonList people={this.state.people} />;
  }
}

export default App;
