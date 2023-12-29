'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const themeHandler = () => {
    if (theme === 'system') {
      const isSystemThemeDark =
        typeof window !== 'undefined' &&
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(isSystemThemeDark ? 'light' : 'dark');
    } else {
      setTheme(theme === 'light' ? 'dark' : 'light');
    }
  };
  const modifyTheme = theme && theme?.charAt(0).toUpperCase() + theme?.slice(1);

  return (
    <motion.label
      className='relative inline-flex items-center cursor-pointer mt-5 group'
      whileHover={{
        scale: 1.05,
        letterSpacing: '3px',
        originX: 0,
        transition: { type: 'tween' },
      }}
      whileTap={{
        scale: 0.95,
        letterSpacing: '2px',
        originX: 0,
      }}>
      <input
        type='checkbox'
        value=''
        className='sr-only peer'
        onClick={themeHandler}
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[var(--mainColor)] dark:peer-focus:ring-[var(--mainColor)] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-600"></div>
      <span className='ms-3 text-sm font-medium text-gray-900 dark:text-gray-300 group-hover:text-[var(--blue)]'>
        {modifyTheme}
      </span>
    </motion.label>
  );
};
export default ThemeChanger;
