import React from 'react';
import Score from './Resultados/Score';
import StaticScore from './Resultados/StaticScore';
import Puntos from './Resultados/Puntos';
import Icon from './Icon';

const Country = (props) => {
  const {name, isWinner, id, pj, pg, pe,/* pp,*/ gf, gc,df, puntos, handlePeChange, handlePgChange, /*handlePpChange, */handleGf, handleGc, handleRemoveCountry} = props;
  return (
    <div className="country">
      <span className="country-name">
        <button onClick={() => handleRemoveCountry(id)}>✖</button>
        <Icon isWinner={isWinner}/>
        <span>{name}</span>
      </span>

      <StaticScore 
      score={pj} />

      <Score 
      score={pg}
      id={id}
      changeScore={handlePgChange}
      />

      <Score
      score={pe}
      id={id}
      changeScore={handlePeChange} 
      />

      {/*
      <Score
      score={pp}
      id={id}
      changeScore={handlePpChange}
      />
      */}

      <Score
      score={gf}
      id={id}
      changeScore={handleGf}
      />

      <Score
      score={gc}
      id={id}
      changeScore={handleGc}
      />

      <StaticScore 
      score={df} />

      <Puntos
      puntos={puntos} />
    </div>
  );
}

export default Country;