import React from 'react';
import NavBarDashBoardPage from './_components/navbar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBarDashBoardPage />
      {children}
    </>
  );
};

export default DashboardLayout;
