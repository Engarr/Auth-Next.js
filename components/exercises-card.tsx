'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

type ExercisesCardProps = {
  imageUrl: string;
  alt: string;
  categoryName: string;
  index: number;
  link: string;
};

const ExercisesCard = ({
  imageUrl,
  alt,
  categoryName,
  index,
  link,
}: ExercisesCardProps) => {
  const variants = {
    start: {
      opacity: 0,
      x: -100,
    },
    end: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: index * 0.1 },
    }),
  };
  const imageVariants = {
    hover: {
      scale: 0.95,
    },
    tap: {
      scale: 0.98,
    },
  };
  const textVariants = {
    hover: {
      scale: 1.05,
    },
    tap: {
      scale: 0.95,
    },
  };
  return (
    <Link
      href={`${link}`}
      className='outline-[var(--mainColor)] h-[250px]  rounded-md  overflow-hidden'>
      <motion.div
        variants={variants}
        initial='start'
        animate='end'
        custom={index}
        whileHover='hover'
        whileTap='tap'
        tabIndex={-1}
        className='w-[300px] h-[250px] relative mb-3 shadow-xl bg-[var(--exercises-card-bg)]'>
        <motion.div
          className='w-full h-full'
          variants={imageVariants}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
          <Image
            src={imageUrl}
            alt={alt}
            quality={80}
            fill
            priority
            sizes='(max-width: 768px) 100vw, 33vw'
          />
        </motion.div>

        <div className='absolute bottom-0 bg-[var(--black-80)] w-full text-[var(--white)] text-center py-3 '>
          <motion.div
            variants={textVariants}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
            <span className='text-[var(--mainColor)] font-semibold pr-2 '>
              {categoryName}
            </span>
            exercises
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ExercisesCard;
