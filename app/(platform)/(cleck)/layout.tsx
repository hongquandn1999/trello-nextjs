import React from 'react';

type Props = {};

const CleckLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center">{children}</div>
  );
};

export default CleckLayout;