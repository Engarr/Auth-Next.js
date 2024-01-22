import React from 'react';
import cn from 'clsx';

type WrapperType = {
  children: React.ReactNode;
  style?: string;
};

const CardContentContainer = ({ children, style }: WrapperType) => {
  return (
    <div
      className={cn(
        'shadow-xl rounded-lg bg-[var(--drawBgk)] xl:max-w-[1400px] lg:w-full mx-4 my-2',
        style
      )}>
      {children}
    </div>
  );
};

export default CardContentContainer;
