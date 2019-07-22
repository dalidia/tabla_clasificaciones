import React from 'react';
import Score from './Resultados/Score';
import StaticScore from './Resultados/StaticScore';
import Puntos from './Resultados/Puntos';

const Country = (props) => {
  const {name, id, index, pj, pg, pe, pp, gf, gc,df, puntos, handlePeChange, handlePgChange, handlePpChange, handleGf, handleGc, handleRemoveCountry} = props;
  return (
    <div className="country">
      <span className="country-name">
        <button onClick={() => handleRemoveCountry(id)}>✖</button>
        <span>{name}</span>
      </span>

      <StaticScore 
      score={pj} />

      <Score 
      score={pg}
      index={index}
      changeScore={handlePgChange}
      />

      <Score
      score={pe}
      index={index}
      changeScore={handlePeChange} 
      />

      <Score
      score={pp}
      index={index}
      changeScore={handlePpChange}
      />

      <Score
      score={gf}
      index={index}
      changeScore={handleGf}
      />

      <Score
      score={gc}
      index={index}

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