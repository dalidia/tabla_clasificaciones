import React, {Component} from 'react';

class AddCountryForm extends Component {
  state = {
    value:''
  };

  handleChange = e => {
    this.setState({value: e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddCountry(this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type='text'
          value={this.state.value}
          onChange={this.handleChange}
          placeholder='Ingresa un equipo'
          />

        <input 
          type='submit'
          value="Añade a un equipo"
          />
      </form>
    );
  }
}


export default AddCountryForm;