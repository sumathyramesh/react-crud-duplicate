import React, {Component} from 'react';
import PersonList from './PersonList';
import PersonEdit from './PersonEdit';
import './styles/App.css';

//const uuid = require('uuid4');
// id = uuid();
// This will create a unique id for new persons

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currView: "PersonList",
            nameToEditFirst: '',
            nameToEditLast: '',
            idToEdit: '',
            people: [
                {firstName: 'Margaret', lastName: 'Hamilton', id: '81d6ff6c-10f4-4db0-88f2-1ebf789b7779'},
                {firstName: 'Donald', lastName: 'Knuth', id: 'f515b8de-5916-47db-9fa8-75efe4a5ebb2'}
            ]
        }
      }

     newView = (view, firstName, lastName, id)  => {
       this.setState({...this.state, currView: view, nameToEditFirst: firstName, nameToEditLast: lastName, idToEdit: id})
     }

     editPerson = (view, firstName, lastName, id)  => {
       let editPeople = this.state.people.map((p) => {
            if (p.id === id) {
                return {firstName: firstName, lastName: lastName, id: id}
            } else {
                return p
            }
          })

       this.setState({...this.state, currView: view, people: editPeople})
     }


    render() {
        return (
            <div className="Main">
                {this.state.currView === "PersonList" ?
                <PersonList people={this.state.people} updateView={this.newView} /> :
                <PersonEdit nameToEditFirst={this.state.nameToEditFirst} nameToEditLast={this.state.nameToEditLast} id={this.state.idToEdit} updatePerson={this.editPerson} />}
            </div>
        );
    }
}

export default App;
