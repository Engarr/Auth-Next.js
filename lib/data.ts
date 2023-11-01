import React from 'react';
import { CgGym } from 'react-icons/cg';
import { BiSolidHome } from 'react-icons/bi';
import { MdOutlineLogout } from 'react-icons/md';

export const links = [
  { name: 'Home', link: '/#home', icon: React.createElement(BiSolidHome) },
  { name: 'Exercises', link: '/exercises', icon: React.createElement(CgGym) },
  {
    name: 'Logout',
    link: '',
    icon: React.createElement(MdOutlineLogout),
  },
] as const;
