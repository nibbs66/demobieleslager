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
                        console.log(credentials)

                    const res = await prisma.users.findUnique({
                        where: {
                            id: credentials.id,
                        }
                    }   )
                  const user = await res;

                        return user

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

