import React from 'react';
import { motion } from 'framer-motion';
import MenuItem from './menu-item';
import { links } from '@/lib/data';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Navigation = () => {
  return (
    <motion.ul
      className='z-[999] fixed top-[100px] lg:pl-10 pl-5 '
      variants={variants}>
      {links.map((link, index) => (
        <React.Fragment key={index}>
          <MenuItem name={link.name} icon={link.icon} path={link.link} />
        </React.Fragment>
      ))}
    </motion.ul>
  );
};

export default Navigation;
