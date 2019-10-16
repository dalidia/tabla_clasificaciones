import React from 'react';

const Score = ({score, id, changeScore}) => {
	return (
    <div className="pg-pe-pp">
      <button onClick={() => changeScore(score, id, +1)}>↑</button>
      <span>{score}</span>
      <button onClick={() => changeScore(score, id, -1)}>↓</button>
    </div>
  );
};

export default Score;