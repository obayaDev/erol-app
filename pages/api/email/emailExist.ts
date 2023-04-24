import nodemailer from 'nodemailer';
import * as tls from 'tls';
import { NextApiRequest, NextApiResponse } from 'next';
import validate from 'deep-email-validator'
 

export default async function handler(req: NextApiRequest, res: NextApiResponse){

  const {email} = req.body;
  console.log(email);
  const isValidated = await validate(email);
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(isValidated);

  /*const tlsOptions: tls.ConnectionOptions = {
    ciphers: 'TLSv1.2',
    minVersion: 'TLSv1.2',
  };

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
  });*/
  
  /*const mailOptions = {
    from: 'dormir@erol.cat',
    to: 'o@gail.com',
    subject: 'Asunto del correo electrónico',
    text: 'Contenido del correo electrónico',
  };*/

  /*transporter.sendMail(mailOptions, (error, info) => {
    if(error){
      res.status(200).json({exist: true, response: error});
    }else{
      res.status(200).json({exist: true, response: error});
    }
  });*/

}