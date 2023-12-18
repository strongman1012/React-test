// Image component
import React from 'react';

const Image = ({ imageUrl, altText, onClick }) => {
  return <img src={imageUrl} alt={altText} onClick={onClick} />;
};

export default Image;
