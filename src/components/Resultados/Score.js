import React from 'react';

const Score = ({score, index, changeScore}) => {
	return (
    <div className="pg-pe-pp">
      <button onClick={() => changeScore(score, index, +1)}>↑</button>
      <span>{score}</span>
      <button onClick={() => changeScore(score, index, -1)}>↓</button>
    </div>
  );
};

export default Score;