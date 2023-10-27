import connectToDB from '@/lib/mongodb';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '@/models/user';

export const options = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials && credentials;

        try {
          await connectToDB();
          const user = await User.findOne({ email });
        } catch (error) {
          console.log(error);
        }
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET as string,
  pages: {
    signIn: '/',
  },
};
