import { signOut } from 'next-auth/react';
import React from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

type MenuItemProps = {
  path: string;
  children: React.ReactNode;
};

const SignOutBtn = ({ path, children }: MenuItemProps) => {
  const toasterHandler = () => {
    toast.success('You have been successfully logout!');
  };
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        letterSpacing: '3px',
        originX: 0,
        color: 'var(--blue)',
        transition: { type: 'tween' },
      }}
      whileTap={{
        scale: 0.95,
        letterSpacing: '2px',
        originX: 0,
      }}
      onClick={() => {
        toasterHandler();
        signOut({ callbackUrl: path });
      }}
      className='items-center flex outline-[var(--mainColorOpacity30)] px-2 text-xl lg:text-lg'>
      {children}
    </motion.button>
  );
};

export default SignOutBtn;
