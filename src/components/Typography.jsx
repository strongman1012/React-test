import React from 'react';

const Typography = ({ fontStyle, children }) => {

  return (
    <div className={fontStyle}>
      {children}
    </div>
  );
};

export default Typography;
