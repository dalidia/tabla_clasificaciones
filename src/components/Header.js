import React from 'react';

const Header = props => {
  return (
    <header>
      <h1>{props.title}</h1>
      <h2 className='pj'>Pj</h2>
      <h2 className='pg'>PG</h2>
      <h2 className='pe'>PE</h2>
      <h2 className='pe'>PP</h2>
      <h2 className='gf-gc'>GF</h2>
      <h2 className='gf-gc'>GC</h2>
      <h2 className='gd'>GD</h2>
      <h2 className='pts'>Pts</h2>
    </header>
  );
}

export default Header;