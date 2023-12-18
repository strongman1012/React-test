// Header.js
import React from 'react';
import Image from './Image';
import { useHistory } from 'react-router-dom';

const Header = () => {
    const logoUrl = 'img/logo.png';
    const logoText = 'logo';
    const history = useHistory();
    const handleButtonClick = () => {
        history.push('/');
      };
  return (
    <header className='py-10'>
      <Image imageUrl={logoUrl} altText={logoText} onClick={handleButtonClick} />
    </header>
  );
};

export default Header;
