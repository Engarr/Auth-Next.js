'use client';

import AuthForm from '@/components/auth-form';
import { tilt_neon } from '@/lib/fonts';
import { motion } from 'framer-motion';
// import { CgGym } from 'react-icons/cg';

export default function Home() {
  return (
    <main className=' relative '>
      <motion.h1
        initial={{ opacity: 0, y: -100, x: '-50%' }}
        animate={{ opacity: 1, y: 0, x: '-50%' }}
        className={` flexCenter mt-8 lg:mt-[50px] left-1/2 -translate-x-1/2 absolute ${tilt_neon.className} text-3xl lg:text-3xl text-[var(--mainColor)] lg:tracking-widest text-center w-full font-bold `}>
        Sign in to Gym-Assistant
        {/* <span className='text-black ml-4  p-2 shadow-md rounded-full'>
          <CgGym />
        </span> */}
      </motion.h1>
      <AuthForm />
    </main>
  );
}
