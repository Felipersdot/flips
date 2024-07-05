import React from 'react';
import DispensaryHeader from './Header/DispensaryHeader';

const DispensaryLayout = ({ children }) => {
  return (
    <div>
      <DispensaryHeader />
      {children}
    </div>
  );
};

export default DispensaryLayout;
