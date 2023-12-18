// Footer.js
import React from 'react';
import Typography from './Typography';

const Footer = () => {
  return (
    <footer className='flex justify-between py-6'>
      <Typography fontStyle="font-primary text-base">
        © Appbanton Studios
      </Typography>
      <Typography fontStyle="font-primary text-base">
        made with ❤️️ in POS
      </Typography>
    </footer>
  );
};

export default Footer;
