import React from 'react';

const StaticScore = ({score}) => {
	return (
    <div className='static-score'>
      <span>{score}</span>
    </div>
	);
};

export default StaticScore;