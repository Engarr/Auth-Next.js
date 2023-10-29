import React from 'react';
import { motion } from 'framer-motion';

type SubmitBtnType = {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const SubmitBtn = ({ children, onClick }: SubmitBtnType) => {
  return (
    <motion.button
      type='button'
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      onClick={onClick}
      className='bg-[var(--mainColor)] py-2 px-10 rounded-sm font-semibold tracking-wider lg:my-2 my-5 text-sm lg:text-base'>
      {children}
    </motion.button>
  );
};

export default SubmitBtn;
