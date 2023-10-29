'use client';

import { tilt_neon } from '@/lib/fonts';
import { useState } from 'react';
import Input from './UI/input';
import { motion } from 'framer-motion';
import Link from 'next/link';
import SubmitBtn from './UI/submit-btn';
import { login, register } from '@/lib/auth-functions';
import { useRouter } from 'next/navigation';
import { authFormsValidation } from '@/lib/inputs-validation';
import MessagePopup from './UI/message-popup';

type AuthForm = {
  mode?: string;
};

const AuthForm = ({ mode }: AuthForm) => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    repeatPassword: '',
  });
  const [userDataErrors, setUserDataErrors] = useState({
    email: '',
    password: '',
    repeatPassword: '',
  });
  const [messageOptions, setMessageOptions] = useState({
    visible: false,
    message: '',
    type: '',
  });
  const router = useRouter();
  const isLoginMode = mode !== '/register';

  const userDataHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
    setUserDataErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { email, password, repeatPassword } = userData;
    const validationResult = authFormsValidation({
      email,
      password,
      repeatPassword,
      isLoginMode,
    });
    if (Object.values(validationResult).some((value) => value !== '')) {
      setUserDataErrors({
        email: validationResult.email,
        password: validationResult.password,
        repeatPassword: validationResult.repeatPassword,
      });
      return;
    }

    try {
      if (isLoginMode) {
        const res = await login(userData.email, userData.password);

        if (res?.ok) {
          setMessageOptions({
            visible: true,
            message: 'Hello! You have been logged in!.',
            type: 'success',
          });
          setTimeout(() => {
            router.push('/home');
          }, 3000);
        }
        if (res?.error) {
          setMessageOptions({
            visible: true,
            message: 'Incorrect email or password.',
            type: 'error',
          });
          return;
        }
      } else {
        const res = await register(userData.email, userData.password);
        if (res?.ok) {
          setMessageOptions({
            visible: true,
            message: 'Account created. You can login now.',
            type: 'success',
          });
          setTimeout(() => {
            router.push('/');
          }, 3000);
        } else if (res.status === 500) {
          const responseJson = await res.json();
          setMessageOptions({
            visible: true,
            message: responseJson.message,
            type: 'error',
          });
          return;
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <motion.div
        className='absolute h-auto w-[95%] lg:w-[600px] shadow-lg left-1/2 top-[100px] lg:top-[180px] rounded-sm bg-white/40 '
        initial={{ opacity: 0, y: 100, x: '-50%' }}
        animate={{ opacity: 1, y: 0, x: '-50%' }}
        transition={{ delay: 0.3 }}>
        <div className=' relative py-[20px]  lg:py-[50px] flexCenter flex-col'>
          <h2
            className={`${tilt_neon.className} text-3xl lg:text-4xl text-[var(--mainColor)] mb-10 lg:mb-6 tracking-widest`}>
            {isLoginMode ? 'Login' : 'Register'}
          </h2>
          <form className='w-full text-center flexCenter flex-col'>
            <div className=' w-full lg:w-[75%] '>
              <Input
                name='email'
                onChange={userDataHandler}
                type='text'
                value={userData.email}
                spanName='E-mail:'
                errorMessage={userDataErrors.email}
              />
              <Input
                name='password'
                onChange={userDataHandler}
                type='password'
                value={userData.password}
                spanName='Password:'
                errorMessage={userDataErrors.password}
              />
              {!isLoginMode && (
                <Input
                  name='repeatPassword'
                  onChange={userDataHandler}
                  type='password'
                  value={userData.repeatPassword}
                  spanName='Repeat password:'
                  errorMessage={userDataErrors.repeatPassword}
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
            whileTap={{ scale: 0.95 }}
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
      <MessagePopup
        visible={messageOptions.visible}
        setHideAction={setMessageOptions}
        message={messageOptions.message}
        type={messageOptions.type}
      />
    </>
  );
};

export default AuthForm;
