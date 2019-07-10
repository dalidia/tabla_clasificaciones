import React, {Component} from 'react';
import Header from './Header';
import Country from './Country';
import AddCountryForm from './AddCountryForm';

/* ¿Cansado de calcular la tabla de posiciones? ¿Con miedo de cometer un error matemático? ¡No te preocupes! Nosotros te ayudamos. 
*/
class Grupo extends Component {
  state = {
    countries: [
      {
        name: 'Equipo',
        id: 0,
        pj:1     
      }
    ]
  };

  prevId = this.state.countries.length - 1;
  prevPj = this.state.countries.length - 1;

  handleRemoveCountry = key => {
    this.prevPj -= 1;
    this.state.countries.map(country => country.pj = this.prevPj);
    this.setState(prevState => ({
      countries: prevState.countries.filter(country => country.id !== key)
    }));
  };

  handleAddCountry = name => {
    let newCountry = {
      name,
      id: this.prevId += 1,
      pj: this.prevPj += 1
    };

    this.state.countries.map(country => {
      country.pj = newCountry.pj;
      return country;
    });

    this.setState(prevState => ({
      countries:prevState.countries.concat(newCountry)
    }));
  };

  handleAddGroup = () => {

  };

  render() {
    return (
      <div className='group-container'>
        <button className='removeGroup' onClick={() => this.props.handleRemoveGroup(this.props.index)}>✖</button>

        <div className='group'>
          <Header 
          title={this.props.title}
          />

          {this.state.countries.map( (country) =>
            <Country 
              pj={country.pj}
              name={country.name}
              handleRemoveCountry={this.handleRemoveCountry}
              key={country.id.toString()}
              index={country.id}
            />
          )}

          <AddCountryForm handleAddCountry={this.handleAddCountry}/>
        </div>

      </div>
    );
  }
}

export default Grupo;