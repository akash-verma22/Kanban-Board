// Using mailgen fpr crafting the mails
// Using nodemailer for sending the emails

import Mailgen from "mailgen";
import nodemailer from "nodemailer";

const sendMail = async (options) => {
    // Initialize mailgen instance with default theme and brand configuration
    const mailGenerator = new Mailgen({
        theme: "default",
        product: {
            name: "Kanban-Board",
            link: "https://mailgen.js"
        }
    });

    // For more info on how mailgen content work visit https://github.com/eladnava/mailgen#readme
    // Generate the plaintext version of the e-mail (for clients that do not support HTML)
    const emailText = mailGenerator.generatePlaintext(options.mailGenContent);
    
    // Generate an HTML email with the provided contents
    const emailHTML = mailGenerator.generate(options.mailGenContent);

    // Create a nodemailer transporter instance which is responsible to send a mail
    const transporter = nodemailer.createTransport({
        host: process.env.MAILTRAP_SMTP_HOST,
        port: process.env.MAILTRAP_SMTP_PORT,
        auth: {
          user: process.env.MAILTRAP_SMTP_USER,
          pass: process.env.MAILTRAP_SMTP_PASS,
        },
    });

    const mail = {
        from: "mail.taskmanager@example.com",
        to: options.email,
        subject: options.subject,
        text: emailText,
        html: emailHTML
    };

    try {
        await transporter.sendMail(mail);
    } catch (error) {
        console.error("Email service failed.");
        console.error("Error",error);
    }

};



// Body generating function
const emailVerificationMailContent = (username,verificationURL) =>{
    return {
        body: {
            name: username,
            intro: "Welcome to the Kanban-Board! We're very excited to have you onboard.",
            action: {
                instructions: 'To get started with Kanban-Board, please click here:',
                button: {
                    color: '#22BC66', // Optional action button color
                    text: 'Verify your email!',
                    link: verificationURL
                }
            },
            outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
        }
    }
};


const forgotPasswordMailContent = (username,forgotPasswordURL) =>{
    return {
        body: {
            name: username,
            intro: "Request recieved to change password.",
            action: {
                instructions: 'To change your password, please click here:',
                button: {
                    color: '#22BC66', // Optional action button color
                    text: 'Change your password!',
                    link: forgotPasswordURL
                }
            },
            outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
        }
    }
};

export {emailVerificationMailContent,forgotPasswordMailContent,sendMail};