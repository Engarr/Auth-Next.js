import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import SignOutBtn from './signout';

type MenuItemProps = {
  name: string;
  icon: React.ReactElement;
  path: string;
};

const variants = {
  open: {
    y: 0,
    opacity: 1,
    display: 'flex',
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    display: 'none',
    transition: {
      y: { stiffness: 1000 },
      display: { delay: 0.5 },
    },
  },
};

const MenuItem = ({ name, icon, path }: MenuItemProps) => {
  return (
    <motion.li
      aria-hidden='true'
      variants={variants}
      tabIndex={-1}
      className='mb-2 cursor-pointer tracking-wide text-lg focus:outline-none '
      whileHover={{
        scale: 1.05,
        letterSpacing: '4px',
        originX: 0,
        color: 'var(--blue)',
        transition: { type: 'tween' },
      }}
      whileTap={{
        scale: 0.95,
        letterSpacing: '2px',
        originX: 0,
      }}>
      {name !== 'Logout' ? (
        <Link
          href={path}
          className='items-center flex outline-[var(--mainColorOpacity30)] px-2 text-xl lg:text-lg'>
          <span className=''>{icon}</span>
          <span className='ml-2'>{name}</span>
        </Link>
      ) : (
        <SignOutBtn path={path}>
          <span className=''>{icon}</span>
          <span className='ml-2'>{name}</span>
        </SignOutBtn>
      )}
    </motion.li>
  );
};

export default MenuItem;
