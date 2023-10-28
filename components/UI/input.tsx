import React from 'react';

type InpuType = {
  value: string;
  type: string;
  name: string;
  spanName: string;

  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ value, type, name, onChange, spanName }: InpuType) => {
  return (
    <label htmlFor={name} className='relative text-sm lg:text-base'>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        placeholder=''
        autoComplete=''
        onChange={onChange}
        className='shadow-lg p-[20px] w-[90%] lg:w-[75%] rounded-sm outline-none placeholder:text-transparent peer  bg-gray-100/50 border-gray-200 
        focus-within:border-[var(--mainColorOpacity60)] border-2 transition-all duration-300 mb-5 lg:mb-10'
      />
      <span
        className='absolute left-[20px] -top-1 transition-all cursor-text duration-300 rounded-sm
        peer-focus-within:-top-[35px] 
        peer-focus-within:left-[25px]
        peer-focus-within:text-xs
        peer-focus-within:bg-gray-100
        peer-focus-within:px-3
        peer-focus-within:py-1
        peer-focus-within:border-[var(--mainColorOpacity60)]
        peer-focus-within:border-2
        
        
        peer-focus-within:[&:not(:placeholder-shown)]:border-[var(--mainColorOpacity60)]
        peer-[&:not(:placeholder-shown)]:-top-[35px] 
        peer-[&:not(:placeholder-shown)]:left-[25px]
        peer-[&:not(:placeholder-shown)]:text-xs
        peer-[&:not(:placeholder-shown)]:bg-gray-100
        peer-[&:not(:placeholder-shown)]:px-3
        peer-[&:not(:placeholder-shown)]:py-1
        peer-[&:not(:placeholder-shown)]:border-gray-200
        peer-[&:not(:placeholder-shown)]:border-2'>
        {spanName}
      </span>
    </label>
  );
};

export default Input;
