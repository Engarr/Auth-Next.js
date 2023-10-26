'use client';

import { tilt_neon } from '@/lib/fonts';
import { useState } from 'react';
import Input from './UI/input';
import { motion } from 'framer-motion';
import Link from 'next/link';
import SubmitBtn from './UI/submit-btn';

type AuthForm = {
  mode?: string;
};

const AuthForm = ({ mode }: AuthForm) => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const isLoginMode = mode !== '/register';
  const userDataHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    console.log(e.target.name);
    setUserData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = () => {};
  return (
    <motion.div
      className='absolute h-auto w-[95%] lg:w-[600px] shadow-lg left-1/2 top-[100px] lg:top-[180px] rounded-sm bg-white/40 '
      initial={{ opacity: 0, y: 100, x: '-50%' }}
      animate={{ opacity: 1, y: 0, x: '-50%' }}
      transition={{ delay: 0.3 }}>
      <div className=' relative py-[20px]  lg:py-[50px] flexCenter flex-col'>
        <h2
          className={`${tilt_neon.className} text-3xl lg:text-4xl text-[var(--mainColor)] mb-6 tracking-widest`}>
          {isLoginMode ? 'Login' : 'Register'}
        </h2>
        <form className='w-full text-center flexCenter flex-col'>
          <div>
            <Input
              name='email'
              onChange={userDataHandler}
              type='text'
              value={userData.email}
              spanName='E-mail:'
            />
            <Input
              name='password'
              onChange={userDataHandler}
              type='password'
              value={userData.password}
              spanName='Password:'
            />
            {!isLoginMode && (
              <Input
                name='repeatPassword'
                onChange={userDataHandler}
                type='repeatPassword'
                value={userData.password}
                spanName='Repeat password:'
              />
            )}
          </div>

          <SubmitBtn onClick={handleLogin}>
            {isLoginMode ? 'Login' : 'Create account'}
          </SubmitBtn>
        </form>
        {isLoginMode && <p className='mt-5'>You dont have an account yet?</p>}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95, shadow: 'black' }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          className={`${!isLoginMode && 'mt-5'}`}>
          <Link
            href={isLoginMode ? '/register' : '/'}
            className='text-[var(--blue)] '>
            {isLoginMode ? 'Create an account' : 'Back to login'}
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AuthForm;
