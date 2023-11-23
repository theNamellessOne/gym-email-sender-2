"use server"

const nodemailer = require('nodemailer');

export async function sendMail(subject: string, otpText: string) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "asdfasdfadsf64@gmail.com",
            pass: "wxgr hguu itzr erfi",
        },
    });

    const mailOptions = {
        from: "asdfasdfadsf64@gmail.com",
        to: "sashapubg1903@gmail.com",
        subject: subject,
        text: otpText,
    };

    transporter.sendMail(mailOptions, function (error: any, info: any) {
        if (error) {
            throw new Error(error);
        } else {
            console.log("Email Sent");
            return true;
        }
    });
}