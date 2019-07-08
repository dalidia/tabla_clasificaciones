import React from 'react';

const StaticScore = props => {
	return (
    <div className='static-score'>
      <span>{props.score}</span>
    </div>
	);
};

export default StaticScore;