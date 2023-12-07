import React from 'react';
import { motion } from 'framer-motion';
import MenuItem from './menu-item';
import { links } from '@/lib/data';
import LinksItem from './links-item';
import SignOutBtn from './signout';
import ThemeChanger from './UI/theme-changer';
import { variants as liVariants } from './menu-item';

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
      className='z-[999] fixed top-[100px] lg:pl-10 pl-5 text-[var(--text-color)]'
      variants={variants}>
      {links.map((link, index) => (
        <React.Fragment key={index}>
          <MenuItem>
            <LinksItem name={link.name} path={link.link} icon={link.icon} />
          </MenuItem>
        </React.Fragment>
      ))}
      <MenuItem>
        <SignOutBtn />
      </MenuItem>
      <motion.li aria-hidden='true' variants={liVariants}>
        <ThemeChanger />
      </motion.li>
    </motion.ul>
  );
};

export default Navigation;
