import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { signIn } from 'next-auth/react';

type ProviderBtnType = {
  children: React.ReactNode;
  providerId: string;
};

const ProviderBtn = ({ children, providerId }: ProviderBtnType) => {
  return (
    <motion.button
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      className='bg-gray-200 py-3 px-6 rounded-sm font-semibold  lg:my-2 my-5 text-sm lg:text-sm disabled:bg-gray-400 min-w-[200px] flexCenter'
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      onClick={() => {
        signIn(providerId);
      }}>
      {children}
    </motion.button>
  );
};

export default ProviderBtn;
