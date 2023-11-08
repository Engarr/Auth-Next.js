'use client';
import React, { useState, useRef } from 'react';
import MenuToggleButton from './menu-toggle-button';
import { motion } from 'framer-motion';
import Navigation from './navigation';
import Logo from './logo';
import Modal from './UI/modal';
import { useSession } from 'next-auth/react';
import { useMenuContext } from '@/context/menu-context';

const Header = () => {
  const { data: session } = useSession();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { isMenuVisible, setIsMenuVisible } = useMenuContext();

  const menuHandler = () => {
    setIsMenuVisible((prev) => !prev);
  };
  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: 'circle(30px at 40px 40px)',

      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <header>
      <Logo user={session?.user} />
      <motion.nav
        className='relative'
        initial={false}
        animate={isMenuVisible ? 'open' : 'closed'}
        ref={containerRef}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}>
          <MenuToggleButton
            toggle={menuHandler}
            isMenuVisible={isMenuVisible}
          />
          <motion.div
            className='fixed top-0 left-0 bottom-0 w-full lg:w-[300px] bg-white z-[990]'
            variants={sidebar}
          />
        </motion.div>
        <Navigation />
        <Modal isVisible={isMenuVisible} visibleAction={menuHandler} />
      </motion.nav>
    </header>
  );
};

export default Header;
