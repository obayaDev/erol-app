import prisma from "../../prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function GetSleepForms(req:NextApiRequest ,res: NextApiResponse){
  try{
    const data = await prisma.forms_sleep.findMany({
      where:{
        confirmed: true,
      },
      select:{
        dateIn: true,
        dateOut: true,
      }
    });
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(data);
  }catch(error){
    res.status(500).json("Error: server loading data output an error. Contact with Alex Obaya if the error persist");
  }
  
}