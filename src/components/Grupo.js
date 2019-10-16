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
        name: 'EQUIPO',
        id: 0,
        pj:1,
        pg: 0,
        pe: 0,
        pp: 0,
        gf: 0,
        gc: 0,
        df: 0,
        puntos: 0   
      }
    ]
  };

  prevId = this.state.countries.length - 1;
  prevPj = this.state.countries.length - 1;

  getWinnerId = () => {
    const points = this.state.countries.map(country => country.puntos);
    const df = this.state.countries.map(country => country.df);
    
    let realPoints = points.map((point, index) => {
      return point + df[index];
    });

    // find the index of the maximum points
    let maxIndex = 0;
    for (let i = 1; i < realPoints.length; i++) {
      if (realPoints[i] > realPoints[maxIndex]) {
        maxIndex = i;
      }
    }
    return this.state.countries[maxIndex].id;
  }

  /* COUNTRY */
  handlePeChange = (pe, id, delta) => {
    if (pe <= 0 && delta < 0) {
      return;
    } else {
      let countryIndex = this.state.countries.findIndex(country => country.id === id);
      this.setState(prevState => {
        return {
          pe: prevState.countries[countryIndex].pe += delta,
          puntos: prevState.countries[countryIndex].puntos += delta        
        }
      });
    }
  };

  handlePgChange = (pg, id, delta) => {
    if (pg <= 0 && delta < 0) {
      return;
    } else {
      let countryIndex = this.state.countries.findIndex(country => country.id === id);
      this.setState(prevState => {
        return {
          pg: prevState.countries[countryIndex].pg += delta,
          puntos: prevState.countries[countryIndex].puntos += (delta * 3)
        }
      });
    }
  };

  // handlePpChange = (pp, id, delta) => {
  //   if (pp <= 0 && delta < 0) {
  //     return;
  //   } else {
  //     let countryIndex = this.state.countries.findIndex(country => country.id === id);
  //     this.setState(prevState => ({
  //       pp: prevState.countries[countryIndex].pp += delta
  //     }));
  //   }
  // };

  handleGf = (gf, id, delta) => {
    if (gf <= 0 && delta < 0) {
      return;
    } else {
      let countryIndex = this.state.countries.findIndex(country => country.id === id);
      this.setState(prevState => {
        return {
          gf: prevState.countries[countryIndex].gf += delta,
          df: prevState.countries[countryIndex].df += delta
        }
      })
    }
  };

  handleGc = (gc, id, delta) => {
    if (gc <= 0 && delta < 0) {
      return;
    } else {
      let countryIndex = this.state.countries.findIndex(country => country.id === id);
      this.setState(prevState => {
        return {
          gc: prevState.countries[countryIndex].gc += delta,
          df: prevState.countries[countryIndex].df -= delta
        }
      })
    }
  };

  /* HANDLE COUNTRY FROM */

  handleRemoveCountry = key => {
    this.prevPj -= 1;
    // changing the value of pj for all teams
    this.state.countries.map(country => country.pj = this.prevPj);
    this.setState(prevState => ({
      countries: prevState.countries.filter(country => country.id !== key)
    }));
  };

  handleAddCountry = name => {
    let newCountry = {
      name,
      id: this.prevId += 1,
      pj: this.prevPj += 1,
      pp: 0,
      pe: 0,
      // pg: 0,
      gf: 0,
      gc: 0,
      df: 0,
      puntos: 0
    };

    this.state.countries.map(country => {
      country.pj = newCountry.pj;
      return country;
    });

    this.setState(prevState => ({
      countries:prevState.countries.concat(newCountry)
    }));
  };

  render() {
    const winnerId = this.getWinnerId();
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
              pg={country.pg}
              pe={country.pe}
              // pp={country.pp}
              gf={country.gf}
              gc={country.gc}
              df={country.df}
              puntos={country.puntos}
              name={country.name}
              handlePeChange={this.handlePeChange}
              handlePgChange={this.handlePgChange}
              // handlePpChange={this.handlePpChange}
              handleGf={this.handleGf}
              handleGc={this.handleGc}
              handleRemoveCountry={this.handleRemoveCountry}
              key={country.id.toString()}
              id={country.id}
              // use the id of the winner
              isWinner={winnerId === country.id}
            />
          )}

          <AddCountryForm handleAddCountry={this.handleAddCountry}/>
        </div>

      </div>
    );
  }
}

export default Grupo;