import AuthForm from '@/components/auth-form';

import { options } from './api/auth/[...nextauth]/option';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Title from '@/components/UI/title';

export default async function Auth() {
  const session = await getServerSession(options);

  if (session) redirect('/home');

  return (
    <main className=' relative '>
      <Title>Sign in to Gym-Assistant</Title>
      <AuthForm />
    </main>
  );
}
