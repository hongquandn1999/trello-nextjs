import React from 'react';
import { NavBar } from './_components/NavBar';
import { Footer } from './_components/Footer';

type Props = {};

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-slate-100">
      {/* Header */}
      <NavBar />
      <main className="pt-40 pb-20 bg-slate-100">{children}</main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MarketingLayout;
