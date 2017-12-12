import React, { Component } from 'react';
import PersonList from './PersonList';
import Nav from './Nav';
import './styles/App.css';
import './skeleton.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      people: [
        {firstName: 'Margaret', lastName: 'Hamilton'},
        {firstName: 'Donald', lastName: 'Knuth'}
      ],
        view: 'PersonList',
        selectedPerson: undefined
    }
  }

  goToPersonEdit = (person) => {
    const newState = this.state;
    newState.view = 'PersonEdit';
    newState.selectedPerson = person;
    super.setState(newState);
  }

  changeFirstName = (event) => {
    const newState = this.state;
    newState.selectedPerson.firstName = event.target.value; // text in the box
    super.setState(newState);
  }

  changeLastName = (event) => {
    const newState = this.state;
    newState.selectedPerson.lastName = event.target.value; // text in the box
    super.setState(newState);
  }


  render() {

    let currentView;
    if(this.state.view === 'PersonList') {
      currentView = <PersonList people={this.state.people} goToPersonEdit={this.goToPersonEdit}/>
    } else {
      currentView = <PersonEdit selectedPerson={this.state.selectedPerson} changeFirstName={this.changeFirstName} changeLastName={this.changeLastName}/>
    }

    return(
      <div className="main">
        <Nav/>
        {currentView}
      </div>
    );
  }
}

export default App;
