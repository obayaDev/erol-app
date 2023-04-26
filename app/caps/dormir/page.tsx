import prisma from "@/prisma/client"
import TableSleepForms from "@/components/sleep/bookingTable"
import getBookings, { BookingType } from "@/pages/api/sleep/getBookings";

import toast from "react-hot-toast";
import BookingTable from "@/components/sleep/bookingTable";
import BookingsSearchBar from "@/components/sleep/searchBar";
import SeeBookingCalendar from "@/components/sleep/bookingsViewer";

export const dynamic = "force-dynamic"

export default async function Sleep(){
  let loading = false;
  let cualquiera:any[] = await getBookings();

  console.log(typeof(cualquiera[0].dateIn));

  const bookings = cualquiera.map((booking) => ({
    ...booking,
    dateIn: new Date(booking.dateIn), // Convert Date to ISO string
    dateOut: new Date(booking.dateOut), // Convert Date to ISO string
  }));
  
  bookings.sort((a, b) => a.dateIn.getTime() - b.dateIn.getTime());
  
  return(
    <main>
      <div className="mt-8">
        <BookingsSearchBar/>
        <div className="flex flex-col lg:flex-row-reverse gap-x-4 w-full mx-auto">
          <div className="mx-auto mt-10"><SeeBookingCalendar/></div>
          <BookingTable bookings={bookings}/>
        </div>
        
      </div>
    </main>
  )
}