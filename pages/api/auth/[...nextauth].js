import NextAuth from 'next-auth'
const CryptoJS = require("crypto-js");

import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '../../../lib/prisma';

export default NextAuth({
    providers: [
        CredentialsProvider({
            id: 'credentials',
                name: 'Credentials',
                authorize: async function(credentials, req) {

                    const userCredentials = {
                        username: credentials.username,
                        password: credentials.password,
                    }
                  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/user/auth`, {
                      method: "POST",
                      body: JSON.stringify(userCredentials),
                      headers: {
                          "Content-Type": "application/json",
                      },
                  }
                  );
                    const user = await res.json();
                    if (res.ok && user) {
                        return user;
                    } else {
                        return null;
                    }
                }
        }),
    ],
    adapter: PrismaAdapter(prisma),

    secret: process.env.NEXTAUTH_SECRET,
session: { strategy: "jwt", maxAge: 24 * 60 * 60 },

jwt: {
    secret: process.env.NEXTAUTH_SECRET,
        maxAge: 60 * 60 * 24 * 30,
        encryption: true,
},
    callbacks: {
        async session(session, user, token) {

            if (user !== null) {
                session.user = user;

            }
            return await session;
        },

        async jwt({ token, user }) {

           if (user) {
               token = user;
               token.isAdmin = user.isAdmin;
              }
            return await token;
        },
    },
} )

