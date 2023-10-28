import { signIn } from 'next-auth/react';

export const register = async (email: string, password: string) => {
  const res = await fetch('api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  return res;
};

export const login = async (email: string, password: string) => {
  const res = await signIn('credentials', {
    email,
    password,
    redirect: false,
  });
  return res;
};
