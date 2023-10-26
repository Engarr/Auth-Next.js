import React from 'react';
import { motion } from 'framer-motion';

type SubmitBtnType = {
  children: React.ReactNode;
  onClick: () => void;
};

const SubmitBtn = ({ children, onClick }: SubmitBtnType) => {
  return (
    <motion.button
      type='button'
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95, shadow: 'black' }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      onClick={onClick}
      className='bg-[var(--mainColor)] py-2 px-10 rounded-sm font-semibold tracking-wider'>
      {children}
    </motion.button>
  );
};

export default SubmitBtn;
