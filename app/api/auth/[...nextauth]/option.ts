import connectToDB from '@/lib/mongodb';
import CredentialsProvider from 'next-auth/providers/credentials';
import GitHubProvider, { GithubProfile } from 'next-auth/providers/github';
import User from '@/models/user';
import bcrypt from 'bcrypt';
import { NextAuthOptions } from 'next-auth';

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      profile(profile: GithubProfile) {
        return {
          ...profile,
          role: profile.role ?? 'user',
          id: profile.id.toString(),
          image: profile.avatar_url,
        };
      },
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        try {
          await connectToDB();
          const user = await User.findOne({ email });
          if (!user) {
            return null;
          }
          const passwordMatch = await bcrypt.compare(password, user.password);
          if (!passwordMatch) {
            return null;
          }
          return user;
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET as string,
  pages: {
    signIn: '/',
  },
  callbacks: {
    async signIn({ account, user }) {
      if (account?.provider == 'credentials') {
        return true;
      }

      if (account?.provider == 'github') {
        await connectToDB();
        try {
          const existingUser = await User.findOne({ email: user.email });
          if (!existingUser) {
            await User.create({
              email: user.email,
              username: user.name,
              image: user.image,
            });
          }
          return true;
        } catch (error) {
          console.log('Error saving user', error);
          return false;
        }
      } else {
        return false;
      }
    },
  },
};
