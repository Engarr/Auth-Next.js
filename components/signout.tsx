import { signOut } from 'next-auth/react';
import React from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { useMenuContext } from '@/context/menu-context';
import { MdOutlineLogout } from 'react-icons/md';

const SignOutBtn = () => {
  const toasterHandler = () => {
    toast.success('You have been successfully logout!');
  };
  const { setIsMenuVisible } = useMenuContext();

  return (
    <motion.button
      tabIndex={-1}
      whileHover={{
        scale: 1.05,
        letterSpacing: '3px',
        originX: 0,

        transition: { type: 'tween' },
      }}
      whileTap={{
        scale: 0.95,
        letterSpacing: '2px',
        originX: 0,
      }}
      onClick={() => {
        toasterHandler();
        signOut({ callbackUrl: '/' });
        setIsMenuVisible(false);
      }}
      className='items-center flex px-2 text-xl lg:text-lg'>
      <span className=''>
        <MdOutlineLogout />
      </span>
      <span className='ml-2'>Logout</span>
    </motion.button>
  );
};

export default SignOutBtn;
