import React from 'react';
import { CgGym } from 'react-icons/cg';
import { BiSolidHome } from 'react-icons/bi';
import { AiOutlineUserAdd } from 'react-icons/ai';

export const links = [
  { name: 'Home', link: '/#home', icon: React.createElement(BiSolidHome) },
  // {
  //   name: 'Signup',
  //   link: '/signup',
  //   icon: React.createElement(AiOutlineUserAdd),
  // },
  { name: 'Exercises', link: '/exercises', icon: React.createElement(CgGym) },
] as const;
