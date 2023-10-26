import { roboto_mono } from '@/lib/fonts';
import React from 'react';

const Logo = () => {
  return (
    <h2
      className={`fixed right-8 top-3 text-2xl font-semibold tracking-widest ${roboto_mono.className}`}>
      Gym-Assistant
    </h2>
  );
};

export default Logo;
