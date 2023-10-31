import React from 'react';
import { motion, Variants } from 'framer-motion';

interface PropsType {
  message: string | undefined;
}

const variants: Variants = {
  start: { scale: 0.5, y: 0 },
  animate: (index: number) => ({
    scale: 2,
    y: [0, 1, 0],
    transition: {
      repeat: Infinity,
      repeatType: 'reverse',
      duration: 0.5,
      ease: 'easeOut',
      delay: index * 0.2,
    },
  }),
};

const Loader = ({ message }: PropsType) => {
  const dotNumber = 3;
  const dotArr = Array.from({ length: dotNumber }, (_, index) => index);
  return (
    <div className={`text-black text-sm flex items-center relative`}>
      {message}
      {dotArr.map((dot, index) => (
        <motion.div
          key={dot}
          className='h-[2px] w-[2px] bg-black rounded-full mx-[3px] relative -bottom-[3px]'
          variants={variants}
          initial='start'
          animate='animate'
          custom={index}
        />
      ))}
    </div>
  );
};

export default Loader;
