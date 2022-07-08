import React from 'react';
import '../styles/components/Header.styl';

function Header({ children, avatar, name, profession }) {
  return (
    <header className='Header'>
      <section className='Header-img'>
        <img className='Header-avatar' src={avatar} alt='Profile img' />
      </section>
      <section className='Header-content'>
        <h1 className='Header-title'>{name}</h1>
        <p className='Header-text'>{profession}</p>
        {children}
      </section>
    </header>
  );
}

export default Header;
