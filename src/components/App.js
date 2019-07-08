import React, {Component} from 'react';
import Header from './Header';
import Country from './Country';
import AddCountryForm from './AddCountryForm';
import './../App.css';

class App extends Component {
  state = {
    countries: [
      {
        name: 'Perú',
        id: 0,
        pj:1     
      },
      {
        name: "Colombia",
        id: 1,
        pj:1
      }
    ]
  };

  prevId = this.state.countries.length - 1;
  prevPj = this.state.countries.length - 1;

  handleRemoveCountry = index => {
    this.prevPj -= 1;
    this.prevId -= 1;
    this.state.countries.map(country => country.pj = this.prevPj);
    this.setState(prevState => ({
      countries: prevState.countries.filter(country => country.id != index)
    }));
  };

  handleAddCountry = name => {
    let newCountry = {
      name,
      id: this.prevId += 1,
      pj: this.prevPj += 1
    };

    this.state.countries.map(country => {
      country.pj = newCountry.pj
    });

    this.setState(prevState => ({
      countries:prevState.countries.concat(newCountry)
    }));
  };

  handlePjChange = () => {

  };

  render() {
    return (
      <div className="tabla-clasifications">
        <Header 
        title='Grupo A'
        />

        {this.state.countries.map( (country, index) =>
          <Country 
            pj={country.pj}
            name={country.name}
            handleRemoveCountry={this.handleRemoveCountry}
            key={country.id.toString()}
            index={index}
          />
        )}

        <AddCountryForm handleAddCountry={this.handleAddCountry}/>

      </div>
    );
  }
}

export default App;
