import React, { Component } from 'react';
import PersonList from './PersonList';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      people: [
        {firstName: 'Margaret', lastName: 'Hamilton'},
        {firstName: 'Donald', lastName: 'Knuth'}
      ]
    }
  }

  render() {
    return <PersonList people={this.state.people} />;
  }
}

export default App;
