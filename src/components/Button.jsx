// ImageButton component
import React from 'react';

const Button = ({ buttonStyle, onClick, children }) => {

  return (
    <button className={buttonStyle} onClick={onClick}>
        {children}
    </button>
  );
};

export default Button;
