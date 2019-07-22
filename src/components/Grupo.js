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
        index:0,
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
  prevIndex = this.state.countries.length - 1;
  prevPj = this.state.countries.length - 1;

  /* COUNTRY */
  handlePeChange = (pe, index, delta) => {
    if (pe <= 0 && delta < 0) {
      return;
    } else {
      this.setState(prevState => {
        return {
          pe: prevState.countries[index].pe += delta,
          puntos: prevState.countries[index].puntos += delta        
        }
      });
    }
    // console.log(this.state.countries[0].pe);

  };

  handlePgChange = (pg, index, delta) => {
    // console.log(pg, delta);
    if (pg <= 0 && delta < 0) {
      return;
    } else {
      this.setState(prevState => {
        return {
          pg: prevState.countries[index].pg += delta,
          puntos: prevState.countries[index].puntos += (delta * 3)
        }
      });
    }
  };

  handlePpChange = (pp, index, delta) => {
    if (pp <= 0 && delta < 0) {
      return;
    } else {
      this.setState(prevState => ({
        pp: prevState.countries[index].pp += delta
      }));
    }
  };

  handleGf = (gf, index, delta) => {
    if (gf <= 0 && delta < 0) {
      return;
    } else {
      this.setState(prevState => {
        return {
          gf: prevState.countries[index].gf += delta,
          df: prevState.countries[index].df += delta
        }
      })
    }
  };

  handleGc = (gc, index, delta) => {
    if (gc <= 0 && delta < 0) {
      return;
    } else {
      this.setState(prevState => {
        return {
          gc: prevState.countries[index].gc += delta,
          df: prevState.countries[index].df -= delta
        }
      })
    }
  };

  /* HANDLE COUNTRY FROM */

  handleRemoveCountry = key => {
    this.prevPj -= 1;
    this.prevIndex -= 1;
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
      index: this.prevIndex += 1,
      pj: this.prevPj += 1,
      pp: 0,
      pe: 0,
      pg: 0,
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
              pp={country.pp}
              gf={country.gf}
              gc={country.gc}
              df={country.df}
              puntos={country.puntos}
              name={country.name}
              handlePeChange={this.handlePeChange}
              handlePgChange={this.handlePgChange}
              handlePpChange={this.handlePpChange}
              handleGf={this.handleGf}
              handleGc={this.handleGc}
              handleRemoveCountry={this.handleRemoveCountry}
              key={country.id.toString()}
              id={country.id}
              index={country.index}
            />
          )}

          <AddCountryForm handleAddCountry={this.handleAddCountry}/>
        </div>

      </div>
    );
  }
}

export default Grupo;