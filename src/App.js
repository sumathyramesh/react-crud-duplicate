import React, { Component } from 'react';
import PersonList from './PersonList';
import PersonEdit from './PersonEdit';
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
    
  goHome = () => {
    const newState = this.state;
    newState.view = 'PersonList';
    newState.selectedPerson = undefined;
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
    
  saveChanges = (updatedPerson) => {
    const newState = this.state;
    newState.people = this.state.people.map((person) => {
        if(person.id === updatedPerson.id) {
            return updatedPerson;
        } else return person;
    })
    newState.view = 'PersonList';
    newState.selectedPerson = undefined;
    super.setState(newState);
  }

    render() {
        let currentView;
        if (this.state.view === 'PersonList') {
            currentView = <PersonList people={this.state.people} goToPersonEdit={this.goToPersonEdit} />
        } else {
            currentView = <PersonEdit selectedPerson={this.state.selectedPerson}
            saveChanges={this.saveChanges}
            goHome={this.goHome} />
        }

        return (
            <div className="main">
            <Nav />
            {currentView}
            </div>
        );
    }
}

export default App;
