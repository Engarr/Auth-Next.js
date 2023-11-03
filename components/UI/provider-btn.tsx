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
      className='bg-gray-200 py-2 px-8 rounded-sm font-semibold  lg:my-2 my-5 text-sm lg:text-sm disabled:bg-gray-400 min-w-[200px] flexCenter'
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => {
        signIn(providerId);
      }}>
      {children}
    </motion.button>
  );
};

export default ProviderBtn;
