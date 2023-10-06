import { LuciaError } from "lucia";
import { auth } from "../../../lib/lucia";

export default async function handler(req, res) {
    const { method } = req;

    if (method === "POST") {
        const { username, password } = req.body;
        if (
            typeof username !== "string" ||
            username.length < 1 ||
            username.length > 31
        ) {
            return res.status(400).json({
                error: "Invalid username"
            });
        }
        if (
            typeof password !== "string" ||
            password.length < 1 ||
            password.length > 255
        ) {
            return res.status(400).json({
                error: "Invalid password"
            });
        }
        try {
            // find user by key
            // and validate password
            const user = await auth.createUser({
                key: {
                    providerId: "username", // auth method
                    providerUserId: username.toLowerCase(), // unique id when using "username" auth method
                    password // hashed by Lucia
                },
                attributes: {
                    username
                }
            });
            const session = await auth.createSession({
                userId: user.userId,
                attributes: {}
            });
            const authRequest = auth.handleRequest({
                req,
                res
            });
            authRequest.setSession(session);
            return res.redirect(302, "/"); // profile page
        } catch (e) {
            if (
                e instanceof LuciaError &&
                (e.message === "AUTH_INVALID_KEY_ID" ||
                    e.message === "AUTH_INVALID_PASSWORD")
            ) {
                // user does not exist
                // or invalid password
                return res.status(400).json({
                    error: "Incorrect username or password"
                });
            }
            return res.status(500).json({
                error: "An unknown error occurred"
            });
        }
    }
}
