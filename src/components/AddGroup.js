import React, {Component} from 'react';

class AddGroup extends Component{
  state = {
    value: ''
  };

  handleChange = e => {
    this.setState({value: e.target.value.toUpperCase()});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddGroup(this.state.value);
    this.setState({value:''});
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-add-group">
        <h1>Grupo:</h1>
        <input
          type='text'
          value={this.state.value}
          placeholder='Ingresa el nombre del grupo'
          onChange={this.handleChange}
        />

        <input 
          type='submit'
          value='Añade otro grupo'
        />
      </form>
    );
  }
  
}

export default AddGroup;