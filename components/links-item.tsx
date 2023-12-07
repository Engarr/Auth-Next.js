import React from 'react';
import Link from 'next/link';
import { useMenuContext } from '@/context/menu-context';

type LinksItemType = {
  name: string;
  icon?: React.ReactElement;
  path?: string;
};

const LinksItem = ({ name, icon, path }: LinksItemType) => {
  const { setIsMenuVisible } = useMenuContext();

  return (
    <>
      <Link
        href={path ? path : ''}
        tabIndex={-1}
        className='items-center flex  px-2 text-xl lg:text-lg'
        onClick={() => {
          setIsMenuVisible(false);
        }}>
        <span className=''>{icon}</span>
        <span className='ml-2'>{name}</span>
      </Link>
    </>
  );
};

export default LinksItem;
