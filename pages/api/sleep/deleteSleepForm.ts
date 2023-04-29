import prisma from "@/prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
){
  let {id} = req.body;

  try{
    const response = await prisma.forms_sleep.delete({
      where:{
        id: id,
      },
    })
    res.status(200).json(response);
  }catch(error){
    res.status(500)
    throw new Error(`Ha ocurregut un error: ${error}`)
  }
}