import React from 'react';
import DispensaryHeader from '../../Header/Header';

const DispensaryLayout = ({ children }) => {
  return (
    <div>
      <DispensaryHeader />
      {children}
    </div>
  );
};

export default DispensaryLayout;
