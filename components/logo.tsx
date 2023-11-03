import React from 'react';
import { roboto_mono } from '@/lib/fonts';
import { motion } from 'framer-motion';
import { AiOutlineUser } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';

type User =
  | {
      name?: string | null | undefined;
      email?: string | null | undefined;
      image?: string | null | undefined;
    }
  | undefined;

type LogoProps = {
  user: User;
  // pagetype: string;
};

const Logo = ({ user }: LogoProps) => {
  const userImage = user?.image ? (
    <motion.div
      className='  rounded-full h-full w-fill flexCenter overflow-hidden'
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}>
      <Image
        className='rounded-full w-full h-full '
        src={user?.image}
        width={200}
        height={200}
        alt={user?.name ?? 'Profile Pic'}
        priority={true}
      />
    </motion.div>
  ) : (
    <AiOutlineUser className='text-3xl text-[var(--mainColor)]' />
  );
  return (
    <motion.div
      className='fixed right-8 top-3  flexCenter'
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: 'spring' }}>
      <motion.div className='mr-4 bg-white  rounded-full h-[50px] w-[50px] flexCenter cursor-pointer overflow-hidden'>
        {userImage}
      </motion.div>
      <Link
        href='/home'
        className={`text-2xl font-semibold tracking-widest ${roboto_mono.className} hover:text-[var(--blue)] transition-all`}>
        Gym-Assistant
      </Link>
    </motion.div>
  );
};

export default Logo;
