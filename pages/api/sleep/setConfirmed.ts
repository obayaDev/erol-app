import prisma from "@/prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
){
  let {id, confirmed} = req.body;
  confirmed = !confirmed;
  try{
    const response = await prisma.forms_sleep.update({
      where:{
        id: id,
      },
      data:{
        confirmed: confirmed,
      }
    })
    res.status(200).json("Ok")
    return response;
  }catch(error){
    res.status(500)
    throw new Error(`Ha ocurregut un error: ${error}`)
  }
}