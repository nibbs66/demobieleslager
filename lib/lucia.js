import { lucia } from "lucia";
import { prisma } from "@lucia-auth/adapter-prisma";
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();
export const auth = lucia({
    env: "DEV", // "PROD" if deployed to HTTPS
    adapter: prisma(client, {
        user: 'users',
        key: 'keys',
        session: 'sessions',
    })
});
export default auth;
