import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {};

const Logo = (props: Props) => {
  return (
    <Link href="/">
      <div className="hidden md:flex justify-center items-center pl-2 gap-2 font-semibold hover:opacity-75 transition">
        <Image src="/logo.jpg" alt="logo" height={30} width={30}></Image>
        <p className="text-neutral-700">HHQ</p>
      </div>
    </Link>
  );
};

export default Logo;
