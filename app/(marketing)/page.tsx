import { Button } from '@/components/ui/button';
import { Medal } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

type Props = {};

const MarketingPage = (props: Props) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex justify-center items-center flex-col">
        <div className="flex justify-center items-center gap-3 bg-yellow-200 p-4 rounded-full uppercase text-amber-700">
          <Medal></Medal>
          HHQ Management
        </div>
        <h1 className="text-3xl md:text-6xl text-neutral-800 mt-4 text-center">
          NXD
        </h1>
        <div className="text-3xl md:text-6xl text-white bg-gradient-to-r from-fuchsia-600 to-pink-600 px-4 py-2 rounded-md mt-4">
          Work forward
        </div>
      </div>
      <div className="text-center text-neutral-400 md:text-xl mt-4 max-w-xs md:max-w-xl mx-auto">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the standard dummy text ever since the
        1500s
      </div>
      <Button className="mt-4" size="lg" asChild>
        <Link href="/sign-up">Get Meichan for free</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
