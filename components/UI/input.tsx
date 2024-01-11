'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UseFormRegisterReturn } from 'react-hook-form';
import cn from 'clsx';

type InpuType = {
  type: string;
  name: string;
  spanName: string;
  errorMessage?: string;
  register: UseFormRegisterReturn;
  onChange: () => void;
};

const Input = ({
  type,
  name,
  spanName,
  errorMessage,
  register,
  onChange,
}: InpuType) => {
  return (
    <div className='w-full mb-7 lg:mb-10 '>
      <label htmlFor={name} className='relative w-full text-sm lg:text-sm'>
        <input
          type={type}
          id={name}
          {...register}
          onChange={onChange}
          placeholder=''
          autoComplete=''
          className={cn(
            `shadow-lg p-[0.75rem] w-[90%] lg:w-full rounded-sm outline-none placeholder:text-transparent peer  bg-[var(--input-bgk)] 
        focus-within:border-[var(--mainColorOpacity60)] border-2 transition-all duration-300 border-[var(--input-border)]`,
            { 'border-[var(--input-error)]': errorMessage }
          )}
        />
        <span
          className={cn(
            `absolute left-[1.25rem] -top-[0.20rem] transition-all cursor-text duration-300 rounded-sm
        peer-focus-within:-top-[1.65rem]
        peer-focus-within:left-[1.563rem]
        peer-focus-within:text-xs
        peer-focus-within:bg-[var(--drawBgk)]
        peer-focus-within:px-3
        peer-focus-within:py-[0.1rem]
        peer-focus-within:border-[var(--mainColorOpacity60)]
        peer-focus-within:border-2
               
        peer-focus-within:[&:not(:placeholder-shown)]:border-[var(--mainColorOpacity60)]
        peer-[&:not(:placeholder-shown)]:-top-[1.65rem] 
        peer-[&:not(:placeholder-shown)]:left-[1.563rem]
        peer-[&:not(:placeholder-shown)]:text-xs
        peer-[&:not(:placeholder-shown)]:bg-[var(--drawBgk)]
        peer-[&:not(:placeholder-shown)]:px-2
        peer-[&:not(:placeholder-shown)]:py-[0.1rem]
      
        peer-[&:not(:placeholder-shown)]:border-2 border-[var(--input-border)]`,
            {
              'peer-[&:not(:placeholder-shown)]:border-[var(--input-error)]':
                errorMessage,
            }
          )}>
          {spanName}
        </span>
      </label>
      <AnimatePresence>
        {errorMessage && (
          <motion.p
            className='mt-2 text-[var(--input-error)] text-sm'
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
