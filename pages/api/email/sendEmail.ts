import prisma from '@/prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import path from "path"

export default async function handler(req: NextApiRequest, res: NextApiResponse){

  const {email, subject, text, file, fileName} = req.body;
  const filePath = path.join(process.cwd(), 'public', "email", fileName);

  const transporter = nodemailer.createTransport({
    host: 'smtp.ionos.es',
    port: 587,
    auth: {
      user: 'dormir@erol.cat',
      pass: '2433AlexXana',
    },
    tls: {
      ciphers:'SSLv3'
    }
  });
  
  await new Promise((resolve, reject) => {
      // verify connection configuration
    transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
            reject(error);
        } else {
            console.log("Server is ready to take our messages");
            resolve(success);
        }
    });
  });

  let mailOptions:any

  mailOptions = {
    from: {
        name: `Dormir - Erol St. Celoni`,
        address: "dormir@erol.cat",
    },
    replyTo: "dormir@erol.cat",
    to: email,
    subject: subject,
    text: text,
    attachments: [
      {
        filename: fileName,
        path: filePath,
      }
    ],
  }

  /* if(file === true){
      mailOptions = {
        from: {
          name: `Dormir - Erol St. Celoni`,
          address: "dormir@erol.cat",
      },
      replyTo: "dormir@erol.cat",
      to: email,
      subject: subject,
      text: text,
      attachments: [
        {
          filename: fileName,
          path: path,
        }
      ]
    };
  }else{
    mailOptions = {
      from: {
          name: `Dormir - Erol St. Celoni`,
          address: "dormir@erol.cat",
      },
      replyTo: "dormir@erol.cat",
      to: email,
      subject: subject,
      text: text,
    }
  } */
  
  
  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, async (error, info) => {
      if(error){
        console.error(error);
        reject(error);
      }else{
        console.log(info);
        resolve(info);
      }
    });
  });
  res.status(200).json({ status: "OK" });
}