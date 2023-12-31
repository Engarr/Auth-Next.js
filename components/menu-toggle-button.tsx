import React from 'react';
import { motion } from 'framer-motion';

type MenuToggleButtonProps = {
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
  isMenuVisible: boolean;
};

const Path = (props: any) => {
  return <motion.path strokeWidth='3' strokeLinecap='square' {...props} />;
};

const MenuToggleButton = ({ toggle, isMenuVisible }: MenuToggleButtonProps) => {
  return (
    <motion.button
      onClick={() => toggle((prev) => !prev)}
      className='fixed z-[999] outline-[var(--mainColor)] p-2 top-[15px] left-[16px] rounded-full'
      initial={false}
      animate={isMenuVisible ? 'open' : 'closed'}
      type='button'
      title='nav-btn'>
      <motion.svg
        width='33'
        height='33'
        viewBox='0 0 33 33'
        stroke='var(--mainColor)'
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        tabIndex={-1}
        className=' outline-none'>
        <Path
          variants={{
            closed: { d: 'M 2 9.5 L 30 9.5' },
            open: { d: 'M 1.5 29 L 31 5' },
          }}
        />
        <Path
          d='M 2 16.5 L 30 16.5'
          variants={{
            closed: { opacity: 1, x: 0, transition: { delay: 0.125 } },
            open: { opacity: 0, x: 100 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: 'M 2 23.5 L 30 23.5' },
            open: { d: 'M 2 5 L 31.5 29' },
          }}
        />
      </motion.svg>
    </motion.button>
  );
};

export default MenuToggleButton;
