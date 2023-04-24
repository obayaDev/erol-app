import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
export default async function handler(req: NextApiRequest, res: NextApiResponse){

  const {email, asunto, texto} = req.body;

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
  
  const mailOptions = {
    from: 'dormir@erol.cat',
    to: 'o@gail.com',
    subject: 'Asunto del correo electrónico',
    text: 'Contenido del correo electrónico',
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if(error){
      res.status(200).json({exist: true, response: error});
    }else{
      res.status(200).json({exist: true, response: error});
    }
  });

}