import "server-only";

import prisma from "../../../prisma/client";

export type BookingType = {
  id: Number,
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
    const bookings = response.map((booking) => ({
      ...booking,
      dateIn: booking.dateIn.toISOString(), // Convert Date to ISO string
      dateOut: booking.dateOut.toISOString(), // Convert Date to ISO string
    }));
    return bookings;
  }catch(error){
    throw new Error(`An error has occured`)
  }
  
}