// Image component
import React from 'react';

const Image = ({ imageUrl, styleName, altText, onClick }) => {
  return <img src={imageUrl} className={styleName} alt={altText} onClick={onClick} />;
};

export default Image;
