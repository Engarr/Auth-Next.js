import React from 'react';
import { roboto_mono } from '@/lib/fonts';
import { motion } from 'framer-motion';
import { AiOutlineUser } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';
import { useScrollContext } from '@/context/scroll-context';
import cn from 'clsx';

type User =
  | {
      name?: string | null | undefined;
      email?: string | null | undefined;
      image?: string | null | undefined;
    }
  | undefined;

type LogoProps = {
  user: User;
};

const Logo = ({ user }: LogoProps) => {
  const { scrollPosition } = useScrollContext();

  const userImage = user?.image ? (
    <Image
      className='rounded-full w-full h-full '
      src={user?.image}
      width={200}
      height={200}
      alt={user?.name ?? 'Profile Pic'}
      priority={true}
    />
  ) : (
    <AiOutlineUser className='text-xl text-[var(--mainColor)] w-full h-full ' />
  );
  return (
    <motion.div
      className={cn(
        `fixed right-1 lg:right-8 top-5  flexCenter z-[100] px-5 py-2 transition-colors duration-300 `,
        {
          'bg-[var(--drawBgk)] shadow-md rounded-md': scrollPosition > 50,
        }
      )}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: 'spring' }}>
      <motion.div className='mr-4 bg-[var(--drawBgk)]  rounded-full lg:h-[55px] lg:w-[55px] h-[45px]  w-[45px]flexCenter cursor-pointer overflow-hidden hidden  sm:flex shadow-xl'>
        <motion.div
          className=' rounded-full h-full w-fill flexCenter overflow-hidden outline-[var(--mainColor)] p-2 '
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}>
          {userImage}
        </motion.div>
      </motion.div>
      <Link
        href='/home'
        className={`text-2xl font-semibold tracking-widest ${roboto_mono.className} hover:text-[var(--blue)] transition-all outline-[var(--mainColor)] p-2 `}>
        Gym-Assistant
      </Link>
    </motion.div>
  );
};

export default Logo;
