import React from 'react';

const Score = props => {
	return (
    <div className="pg-pe-pp">
      <button onClick={() => props.changeScore(+1)}>↑</button>
      <span>{props.score}</span>
      <button onClick={() => props.changeScore(-1)}>↓</button>
    </div>
  );
};

export default Score;