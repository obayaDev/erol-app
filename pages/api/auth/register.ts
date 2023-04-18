import prisma from "@/prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { hash } from "bcrypt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {name, firstName, email, password, role, branch, phone } = req.body;
  const exists = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (exists) {
    res.status(400).send("User already exists");
  } else {
    try{
      const user = await prisma.user.create({
        data: {
          name,
          firstName,
          phone,
          email,
          password: await hash(password, 10),
          role,
          branch
        },
      });
      res.status(200).json(user);
    }catch(error){
      throw new Error(`Error: ${error}`);
    }
    
  }
}
