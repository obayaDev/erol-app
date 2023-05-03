import prisma from "@/prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
//import { hash } from "bcrypt";

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
    res.status(400).send("L'usuari ja existeix");
  } else {

    let branchId:any
    try{
      branchId = await prisma.branches.findUnique({
        select:{
          id: true,
        },
        where:{
          branch: branch,
        }
      })
    }catch(error){
      res.status(400).send("No hi ha cap branca enomenada així, ves al editdor de branques.");
    }

    if(branchId){
      try{
        const user = await prisma.user.create({
          data: {
            name,
            firstName,
            phone,
            email,
            password: password, //await hash(password, 10),
            role,
            branch:{
              connect: {id: branchId.id},
            }
          },
  
        });
        res.status(200).json(user);
      }catch(error){
        throw new Error(`Error: ${error}`);
      }
    }
    
    
  }
}
