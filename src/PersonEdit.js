import React, {Component} from 'react';

class PersonEdit extends Component {

    constructor(props){
      super(props);

      this.state = {
          firstName: this.props.nameToEditFirst,
          lastName: this.props.nameToEditLast,
          id: this.props.id
      }
    }

    handleChangeFirst = (e) => {
      this.setState({firstName: e.target.value})
    }

    handleChangeLast = (e) => {
      this.setState({lastName: e.target.value})
    }

    render() {
        return (
            <div>
              <input type="text" value={this.state.firstName} onChange={this.handleChangeFirst}/>
              <input type="text" value={this.state.lastName} onChange={this.handleChangeLast}/>
              <button onClick={() => this.props.updatePerson("PersonList", this.state.firstName, this.state.lastName, this.state.id)}>Save</button>
          </div>
        );
    }
}

export default PersonEdit;
