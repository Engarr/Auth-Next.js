'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

type InpuType = {
  value: string;
  type: string;
  name: string;
  spanName: string;
  errorMessage?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  value,
  type,
  name,
  onChange,
  spanName,
  errorMessage,
}: InpuType) => {
  const borderColor = !errorMessage ? 'border-gray-200' : 'border-red-400 ';
  const spanBorderColor = !errorMessage
    ? 'border-gray-200'
    : 'peer-[&:not(:placeholder-shown)]:border-red-400';
  return (
    <div className='w-full mb-5 lg:mb-10 '>
      <label htmlFor={name} className='relative w-full text-sm lg:text-sm'>
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          placeholder=''
          autoComplete=''
          onChange={onChange}
          className={`shadow-lg p-[0.75rem] w-[90%] lg:w-full rounded-sm outline-none placeholder:text-transparent peer  bg-gray-100/50 ${borderColor} 
        focus-within:border-[var(--mainColorOpacity60)] border-2 transition-all duration-300 `}
        />
        <span
          className={`absolute left-[1.25rem] -top-[0.20rem] transition-all cursor-text duration-300 rounded-sm
        peer-focus-within:-top-[2.188rem] 
        peer-focus-within:left-[1.563rem]
        peer-focus-within:text-xs
        peer-focus-within:bg-gray-100
        peer-focus-within:px-3
        peer-focus-within:py-1
        peer-focus-within:border-[var(--mainColorOpacity60)]
        peer-focus-within:border-2
               
        peer-focus-within:[&:not(:placeholder-shown)]:border-[var(--mainColorOpacity60)]
        peer-[&:not(:placeholder-shown)]:-top-[2.188rem] 
        peer-[&:not(:placeholder-shown)]:left-[1.563rem]
        peer-[&:not(:placeholder-shown)]:text-xs
        peer-[&:not(:placeholder-shown)]:bg-gray-100
        peer-[&:not(:placeholder-shown)]:px-3
        peer-[&:not(:placeholder-shown)]:py-1
        ${spanBorderColor}
        peer-[&:not(:placeholder-shown)]:border-2`}>
          {spanName}
        </span>
      </label>
      <AnimatePresence>
        {errorMessage && (
          <motion.p
            className='mt-2 text-red-400 text-sm'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}>
            {errorMessage}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Input;
