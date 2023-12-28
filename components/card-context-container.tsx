import React from 'react';
type WrapperType = {
  children: React.ReactNode;
};

const CardContentContainer = ({ children }: WrapperType) => {
  return (
    <div className='shadow-xl rounded-lg bg-[var(--drawBgk)] xl:max-w-[1400px] lg:w-full mx-4 my-2'>
      {children}
    </div>
  );
};

export default CardContentContainer;
