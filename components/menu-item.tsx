import React from 'react';
import { motion } from 'framer-motion';

type MenuItemProps = {
  children: React.ReactNode;
};

export const variants = {
  open: {
    y: 0,
    opacity: 1,
    display: 'flex',

    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    display: 'none',

    transition: {
      y: { stiffness: 1000 },
      display: { delay: 0.5 },
    },
  },
};

const MenuItem = ({ children }: MenuItemProps) => {
  return (
    <motion.li
      aria-hidden='true'
      variants={variants}
      className='mb-2 cursor-pointer tracking-wide text-lg outline-[var(--mainColor)] hover:text-[var(--blue)] '
      whileHover={{
        scale: 1.05,
        letterSpacing: '4px',
        originX: 0,
        transition: { type: 'tween' },
      }}
      whileTap={{
        scale: 0.95,
        letterSpacing: '2px',
        originX: 0,
      }}>
      {children}
    </motion.li>
  );
};

export default MenuItem;
