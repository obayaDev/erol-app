import prisma from "@/prisma/client"
import TableSleepForms from "@/components/sleep/bookingTable"
import getBookings, { BookingType } from "@/pages/api/sleep/getBookings";

import toast from "react-hot-toast";
import BookingTable from "@/components/sleep/bookingTable";
import BookingsSearchBar from "@/components/sleep/searchBar";
import BookingsViewer from "@/components/sleep/bookingsViewer";

export const dynamic = "force-dynamic"

export default async function Sleep(){
  let loading = false;
  let bookings:any[]= await getBookings();

  //let bookings:any[] = await prisma.forms_sleep.findMany();

  bookings.sort((a, b) => a.dateIn.getTime() - b.dateIn.getTime());

  bookings.forEach(booking => {
    booking.id = Number(booking.id);
    booking.dateIn = booking.dateIn.toString();
    booking.dateOut = booking.dateOut.toString();
  });

  return(
    <main>
      <div className="mt-8">
        <BookingsSearchBar/>
        <div className="flex flex-col lg:gap-x-8 lg:flex-row-reverse justify-center mx-auto">
          <div className="w-fit mt-10 mx-auto lg:mx-0"><BookingsViewer/></div>
          <BookingTable bookings={bookings}/>
        </div>
      </div>
    </main>
  )
}