import React, { Component } from 'react';
import PersonList from './PersonList';
import './styles/App.css';
import Nav from './Nav';
import './skeleton.css';

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
    return(
      <div>
        <Nav/>
        <PersonList people={this.state.people} />
        <button className="button-primary">Add a Person</button>
      </div>
    );
  }
}

export default App;
