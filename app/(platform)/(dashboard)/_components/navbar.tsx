import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import { OrganizationSwitcher, UserButton } from '@clerk/nextjs';
import { Plus } from 'lucide-react';
import * as React from 'react';

export interface INavBarDashBoardPageProps {}

export default function NavBarDashBoardPage(props: INavBarDashBoardPageProps) {
  return (
    <div className="fixed top-0 flex p-4 bg-white shadow-sm w-full border-b ">
      <div className="flex  items-center md:max-w-screen-2xl w-full mx-auto justify-between">
        <div className="flex items-center gap-3">
          <Logo />
          <Button size="sm" variant="primary" className="hidden md:block">
            Create
          </Button>
          <Button size="sm" variant="primary" className="block md:hidden">
            <Plus />
          </Button>
        </div>
        <div className="flex items-center gap-2 justify-center">
          <OrganizationSwitcher
            hidePersonal
            afterCreateOrganizationUrl="/organization/:id"
            afterSelectOrganizationUrl="/organization/:id"
            afterLeaveOrganizationUrl="/select-org"
            appearance={{
              elements: {
                rootBox: {
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              },
            }}
          />
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: {
                  width: 30,
                  height: 30,
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
