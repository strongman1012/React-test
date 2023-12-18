import React from 'react';

const Typography = ({ fontStyle, children }) => {

  return (
    <p className={fontStyle}>
      {children}
    </p>
  );
};

export default Typography;
