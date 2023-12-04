'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { toast } from 'react-hot-toast';
import { motion } from 'framer-motion';
import Input from './UI/input';
import SubmitBtn from './UI/submit-btn';

import { tilt_neon } from '@/lib/fonts';
import { login } from '@/lib/auth-functions';
import Loader from './UI/loader';
import SigninProviders from './signin-providers';
import { TLoginSchema, loginSchema } from '@/lib/inputs-validation';

const LoginForm = () => {
  const router = useRouter();
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    clearErrors,

    formState: { errors, isSubmitting },
  } = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = async (data: TLoginSchema) => {
    try {
      const response = await login(data.email, data.password);
      if (response?.ok) {
        toast.success('You are logged in');
        router.push('/home');
        reset();
        setIsSubmitSuccessful(true);
      } else {
        toast.error('Incorrect email or password.');
        setIsSubmitSuccessful(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <motion.div
      className='absolute h-auto w-[95%] lg:w-[600px] shadow-lg left-1/2 top-[100px] lg:top-[180px] rounded-sm bg-white/40 '
      initial={{ opacity: 0, y: 100, x: '-50%' }}
      animate={{ opacity: 1, y: 0, x: '-50%' }}
      transition={{ delay: 0.3 }}>
      <div className=' relative py-[20px]  lg:py-[50px] flexCenter flex-col'>
        <h2
          className={`${tilt_neon.className} text-3xl lg:text-4xl text-[var(--mainColor)] mb-10 lg:mb-6 tracking-widest`}>
          Login
        </h2>

        <form
          className='w-full text-center flexCenter flex-col'
          onSubmit={handleSubmit(onSubmit)}>
          <div className=' w-full lg:w-[75%] '>
            <Input
              name='email'
              type='text'
              spanName='E-mail:'
              register={register('email')}
              errorMessage={errors.email?.message}
              onChange={() => clearErrors('email')}
            />
            <Input
              name='password'
              type='password'
              spanName='Password:'
              register={register('password')}
              errorMessage={errors.password?.message}
              onChange={() => clearErrors('password')}
            />
          </div>

          <SubmitBtn
            isSubmitting={isSubmitting}
            isSubmitSuccessful={isSubmitSuccessful}>
            {isSubmitting ? (
              <Loader message='Sending' />
            ) : isSubmitSuccessful ? (
              <Loader message='Redirection' />
            ) : (
              'Login'
            )}
          </SubmitBtn>
        </form>
        <SigninProviders />
        <p className='mt-5'>You dont have an account yet?</p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
          <Link href='/register' className='text-[var(--blue)] '>
            Create an account
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoginForm;
