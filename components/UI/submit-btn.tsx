import React from 'react';
import { motion } from 'framer-motion';

type SubmitBtnType = {
  children: React.ReactNode;
  isSubmitting: boolean;
  isSubmitSuccessful: boolean;
};

const SubmitBtn = ({
  children,
  isSubmitting,
  isSubmitSuccessful,
}: SubmitBtnType) => {
  return (
    <motion.button
      type='submit'
      disabled={isSubmitting || isSubmitSuccessful}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      className='bg-[var(--mainColor)] py-2 px-10 rounded-sm font-semibold tracking-wider lg:my-2 my-5 text-sm lg:text-base disabled:bg-gray-400'>
      {children}
    </motion.button>
  );
};

export default SubmitBtn;
