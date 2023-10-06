import prisma from "../../../lib/prisma";
const nodeMailer = require("nodemailer");

const handler = async(req, res) => {
    const {method} = req;

    const transport = await nodeMailer.createTransport({
        service: "gmail",
        auth: {
            user: "chrismcnabb6691@gmail.com",
            pass: process.env.GOOGLE_SEC_CHR,
        },
    });

    transport.verify((error) => {
        if (error) {
            console.log("this error==>", error);
        } else {
            console.log("Ready to Send");
        }
    });


    if (method === "POST") {

        const {firstName, lastName, email, phone, subject, message} = req.body;

        const mail = {
            from: firstName, lastName,
            to: "DeMobieleSlager43@gmail.com",
            subject: subject,
            html: `<p>Name: ${firstName} ${lastName}</p>
           <p>Email: ${email}</p>
           <p>Telefoon: ${phone}</p>
           <p>Message: ${message}</p>`,
        }

        try {
            const createMessage = await prisma.mails.create({
                data: {
                    firstName,
                    lastName,
                    email,
                    phone,
                    subject,
                    message,
                    date: new Date()
                },

            })
            await transport.sendMail(mail);
            res.status(201).json(createMessage)
        }catch (err) {
            res.status(500).json(err)
        }



    }
}
export default handler;
