'use client';

import React from 'react';
import { tilt_neon } from '@/lib/fonts';
import { motion } from 'framer-motion';

type PageTitleProps = {
  children: React.ReactNode;
};

const PageTitle = ({ children }: PageTitleProps) => {
  return (
    <motion.h2
      className={`flexCenter mt-8 lg:mt-[50px] text-3xl lg:text-3xl text-[var(--mainColor)] lg:tracking-widest text-center w-full font-bold ${tilt_neon.className}`}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}>
      {children}
    </motion.h2>
  );
};

export default PageTitle;
