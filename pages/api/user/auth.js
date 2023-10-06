const CryptoJS = require("crypto-js");
import prisma from '../../../lib/prisma';

export default async function handler(req, res) {

    const { method } = req;

    if(method==="POST"){

        const { username, password } = req.body;
            const user = await prisma.users.findUnique({
                where: {
                    username
                },
                select: {
                    id: true,
                    username: true,
                    password: true,
                    email: true,
                    isAdmin: true,
                },
            });

            if (user) {
                const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
                const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
                if (originalPassword === password) {
                    const {password, ...others} = user;
                    res.status(200).send({...others, name: user.username})
                } else {
                    return null;
                }
            } else {
                return null;
            }
        }


}
// const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
//                 const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
