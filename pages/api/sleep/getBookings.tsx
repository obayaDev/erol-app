import "server-only";

import prisma from "../../../prisma/client";

export type BookingType = {
  id: number,
  name: String,
  firstName: String,
  email: String,
  phone: String,
  group: String,
  comments: String,
  capsQuatitiy: String,
  childQuatitiy: String,
  dateIn: Date,
  dateOut: Date,
  confirmed: Boolean,
}

export default async function getBookings(){
  try{
    const response = await prisma.forms_sleep.findMany({
      select:{
        id: true,
        name: true,
        firstName: true,
        email: true,
        phone: true,
        group: true,
        comments: true,
        capsQuatitiy: true,
        childQuatitiy: true,
        dateIn: true,
        dateOut: true,
        confirmed: true,
      }
    });
    return response;
  }catch(error){
    throw new Error(`ERROR: ${error} `)
  }
  
}