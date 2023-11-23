import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import React from 'react';

type Props = {};

export const NavBar = (props: Props) => {
  return (
    <div className="fixed bg-white top-0 w-full h-14 shadow-sm border-b flex items-center">
      <div className="flex items-center w-full md:max-w-screen-xl mx-auto">
        <Logo />
        <div className="md:justify-end flex items-center justify-between w-full space-x-4 ">
          <Button size="sm" variant="secondary">
            Login
          </Button>
          <Button size="sm" variant="ghost">
            Get HHQ For Free
          </Button>
        </div>
      </div>
    </div>
  );
};
