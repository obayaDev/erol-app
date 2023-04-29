import prisma from '@/prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
export default async function handler(req: NextApiRequest, res: NextApiResponse){

  const {email, subject, text, file, fileName, path} = req.body;

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

  let mailOptions:any

  if(file){
    mailOptions = {
      from: 'dormir@erol.cat',
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
      from: 'dormir@erol.cat',
      to: email,
      subject: subject,
      text: text
    };
  }
  
  

  transporter.sendMail(mailOptions, async (error, info) => {
    if(error){
      res.status(400).json({exist: true, response: error});
    }else{
      /* const response = await prisma.forms_sleep.update({
        where:{
          id: id,
        },
        data:{
          emailSend: numEmailsSended,
        }
      }); */
      res.status(200).json({exist: true, response: error});
    }
  });

}