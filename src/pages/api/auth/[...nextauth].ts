import { AuthOptions, User } from 'next-auth';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import { z } from 'zod';
import { FetchWithToken } from '@/helpers/fetch';
import { formatToInt } from '@/helpers/formatters';


const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        username: { type: 'text', placeholder: '' }
      },
      async authorize(credentials, req) {
        if (!credentials?.username) throw new Error("Erro ao realizar login")

        // Make the request to get the user info
        // and validate it

        // Example:
        // const { data: response } = await FetchWithToken({
        //   method: "POST",
        //   path: "login",
        //   data: {
        //     username: credentials.username
        //   }
        // });

        const user = {
          id: 0,
          username: "teste"
        };

        if (!user) return null
        return user
      },
    }),
  ],
  callbacks: {
    session({ session, token, trigger }) {
      // @ts-ignore
      session.user = token;
      // @ts-ignore
      session.user.id = token.user_id;
      return session;
    },
    jwt({ token, account, user, trigger, session }) {
      if (account) {
        token.accessToken = account.access_token;
        token = { ...token, ...user };
      }

      if (trigger === "update") {
        // You can update a data from the user without loggin out

        // Example: 
        // token.amount = session.amount
      }

      return token;
    },
  },
  pages: {
    signIn: "/acesso/entrar",
    newUser: "/acesso/cadastrar",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export { authOptions }

export default NextAuth(authOptions);