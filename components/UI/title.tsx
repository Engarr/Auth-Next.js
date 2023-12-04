'use client';

import React from 'react';
import { tilt_neon } from '@/lib/fonts';
import { motion } from 'framer-motion';

type TitleType = {
  children: React.ReactNode;
};

const Title = ({ children }: TitleType) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -100, x: '-50%' }}
      animate={{ opacity: 1, y: 0, x: '-50%' }}
      className={` flexCenter top-10 sm:top-20  lg:mt-[0px] left-1/2 -translate-x-1/2 absolute ${tilt_neon.className} text-3xl lg:text-3xl text-[var(--mainColor)] lg:tracking-widest text-center w-full font-bold `}>
      {children}
    </motion.h1>
  );
};

export default Title;
