import prisma from "../../prisma/client";
import { empty } from "@prisma/client/runtime";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {email, phone, name, firstName, group, comments, dateIn, dateOut, capsQuatitiy, childQuatitiy} = req.body;

  console.log(email)
  const exists = await prisma.forms_sleep.findMany({
    where: {
      email,
    },
  });
  console.log(Object.keys(exists).length)
  if (Object.keys(exists).length !== 0) {
    res.status(400).send("User already exists");
  } else {
    try{
      const user = await prisma.forms_sleep.create({
        data: {
          name,
          firstName,
          email,
          phone,
          group,
          comments,
          capsQuatitiy,
          childQuatitiy,
          dateIn,
          dateOut,
          confirmed: false,
          confirmed_by_id: 0,
        },
      });
      res.status(200).json("ok");
    }catch(error){
      throw new Error(`Error: ${error}`);
    }
    
  }
}