import React, {Component} from 'react';
import Score from './Resultados/Score';
import StaticScore from './Resultados/StaticScore';
import Puntos from './Resultados/Puntos';

class Country extends Component {
  state = {
    pg: 0,
    pe: 0,
    pp: 0,
    gf: 0,
    gc: 0,
    df: 0,
    puntos: 0
  };

  handlePeChange = delta => {
    if (this.state.pe <= 0 && delta < 0) {
      return;
    } else {
      this.setState(prevState => {
        return {
          pe: prevState.pe += delta,
          puntos: prevState.puntos += delta
        }
      });
    }
  };

  handlePgChange = delta => {
    if (this.state.pg <= 0 && delta < 0) {
      return;
    } else {
      this.setState(prevState => {
        return {
          pg: prevState.pg += delta,
          puntos: prevState.puntos += (delta * 3)
        }
      });
    }
  };

  handlePpChange = delta => {
    if (this.state.pp <= 0 && delta < 0) {
      return;
    } else {
      this.setState(prevState => ({
        pp: prevState.pp += delta
      }));
    }
  };

  handleGf = delta => {
    if (this.state.gf <= 0 && delta < 0) {
      return;
    } else {
      this.setState(prevState => {
        return {
          gf: prevState.gf += delta,
          df: prevState.df += delta
        }
      })
    }
  };

  handleGc = delta => {
    if (this.state.gc <= 0 && delta < 0) {
      return;
    } else {
      this.setState(prevState => {
        return {
          gc: prevState.gc += delta,
          df: prevState.df -= delta
        }
      })
    }
  };

  render () {
    return (
      <div className="country">
        <span className="country-name">
          <button onClick={() => this.props.handleRemoveCountry(this.props.index)}>✖</button>
          <span>{this.props.name}</span>
        </span>
  
        <StaticScore 
        score={this.props.pj} />
  
        <Score 
        score={this.state.pg}
        changeScore={this.handlePgChange}
        />
  
        <Score
        score={this.state.pe}
        changeScore={this.handlePeChange} 
        />
  
        <Score
        score={this.state.pp}
        changeScore={this.handlePpChange}
        />

        <Score
        score={this.state.gf}
        changeScore={this.handleGf}
        />

        <Score
        score={this.state.gc}
        changeScore={this.handleGc}
        />
  
        <StaticScore 
        score={this.state.df} />

        <Puntos
        puntos={this.state.puntos} />
      </div>
    );
  }
}

export default Country;