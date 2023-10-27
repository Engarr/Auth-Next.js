import NextAuth from 'next-auth';
import connectToDB from '@/lib/mongodb';
import { options } from './option';

const handler = NextAuth(options);

export { handler as GET, handler as POST };
