'use client';

import { tilt_neon } from '@/lib/fonts';
import Input from './UI/input';
import { motion } from 'framer-motion';
import Link from 'next/link';
import SubmitBtn from './UI/submit-btn';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-hot-toast';

import { signUpSchema, TSignUpSchema } from '@/lib/type';
import { signUser } from '@/lib/auth-functions';
import Loader from './UI/loader';

const RegisterUser = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });
  const onSubmit = async (data: TSignUpSchema) => {
    try {
      const response = await signUser(data.email, data.password);
      if (response.ok) {
        toast.success('Account created. You can login now');
        router.push('/');
        reset();
      } else if (response.status === 500) {
        const responseJson = await response.json();
        toast.error(responseJson.message);
      } else {
        toast.error('Something went wrong, try again later...');
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
          Register
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
            <Input
              name='repeatPassword'
              type='password'
              spanName='Repeat password:'
              register={register('repeatPassword')}
              errorMessage={errors.repeatPassword?.message}
              onChange={() => clearErrors('repeatPassword')}
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
              'Create account'
            )}
          </SubmitBtn>
        </form>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          className='mt-5'>
          <Link href='/' className='text-[var(--blue)] '>
            Back to login
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RegisterUser;
