"use client"
import { useState, useEffect} from "react"
import LoadingDots from "../login/loading-dots";
import { BookingType } from "@/pages/api/sleep/getBookings";
import { BsCalendarDate, BsFillBookmarkCheckFill, BsFillBookmarkXFill } from "react-icons/bs"
import { TbClockHour3, TbSquareRoundedLetterN, TbSquareRoundedLetterG, TbSquareRoundedLetterC, TbSquareRoundedLetterI } from "react-icons/tb"
import { MdOutlineMarkEmailRead } from "react-icons/md"
import { AiTwotonePhone } from "react-icons/ai"
import toast from "react-hot-toast";

export default function BookingTable (props:{bookings: BookingType[]}){
  const [loading, setLoading] = useState(true);
  props.bookings.forEach((booking) => {
    booking.dateIn = new Date(booking.dateIn);
    booking.dateOut = new Date(booking.dateOut);
  })

  let varBookings:BookingType[] = props.bookings;

  useEffect(() => {
    console.log("hey")
    setLoading(false);
  }, [varBookings]);
  
  return(
    <>
      <div className="flex w-full gap-y-4 flex-col mt-10">
        {varBookings.map((booking, key) => {
          return(
            <>
              <div key={key.toString() + "Main"} className="flex flex-row flex-wrap gap-x-4 gap-y-4 h-fit justify-between py-4 px-4 rounded-xl bg-white shadow-md">
                <div className="flex flex-row basis-28 relative justify-evenly bg-slate-300 rounded-xl py-2 pl-3 pr-2">
                  <BsCalendarDate className="text-2xl text-blue-600 -ml-6 -mt-5 bg-white border-2 border-white rounded-lg p-0.5"/>
                  <p className="leading-3 my-auto">{booking.dateIn.getMonth()}/{booking.dateIn.getDate()} - {booking.dateOut.getMonth()}/{booking.dateOut.getDate()}</p>
                </div>
                <div className="flex flex-row basis-32 relative justify-evenly bg-slate-300 rounded-xl py-2 pr-2">
                  <TbClockHour3 className="text-2xl text-blue-600 -ml-3 -mt-5 bg-white border-2 border-white rounded-xl p-0.5"/>
                  <p className="leading-3 my-auto">{booking.dateIn.getHours()}:{booking.dateIn.getMinutes() === 0 ? "00":booking.dateOut.getMinutes()} - {booking.dateOut.getHours()}:{booking.dateOut.getMinutes() === 0 ? "00":booking.dateOut.getMinutes()}</p>
                </div>
                <div className="flex flex-row grow relative justify-evenly bg-slate-300 rounded-xl py-2 pr-2">
                  <TbSquareRoundedLetterN className="text-2xl text-blue-600 -ml-3 -mt-5 bg-white border-2 border-white rounded-lg p-0.5"/>
                  <p className="leading-3 my-auto mx-auto truncate">{booking.name} {booking.firstName}</p>
                </div>
                <div className="flex flex-row grow relative justify-evenly bg-slate-300 rounded-xl py-2 pr-2">
                  <MdOutlineMarkEmailRead className="text-2xl text-blue-600 -ml-3 -mt-5 bg-white border-2 border-white rounded-lg p-0.5"/>
                  <p className="leading-3 my-auto mx-auto truncate">{booking.email}</p>
                </div>
                <div className="flex flex-row grow relative justify-evenly bg-slate-300 rounded-xl py-2 pr-2">
                  <AiTwotonePhone className="text-2xl text-blue-600 -ml-3 -mt-5 bg-white border-2 border-white rounded-xl p-0.5"/>
                  <p className="leading-3 my-auto mx-auto truncate">{booking.phone}</p>
                </div>
                <div className="flex flex-row grow relative justify-evenly bg-slate-300 rounded-xl py-2 pr-2">
                  <TbSquareRoundedLetterG className="text-2xl text-blue-600 -ml-3 -mt-5 bg-white border-2 border-white rounded-lg p-0.5"/>
                  <p className="leading-3 my-auto mx-auto truncate">{booking.group}</p>
                </div>
                <div className="flex flex-row grow relative justify-evenly bg-slate-300 rounded-xl py-2 pr-2">
                  <TbSquareRoundedLetterC className="text-2xl text-blue-600 -ml-3 -mt-5 bg-white border-2 border-white rounded-lg p-0.5"/>
                  <p className="leading-3 my-auto mx-auto truncate">{booking.capsQuatitiy}</p>
                </div>
                <div className="flex flex-row grow relative justify-evenly bg-slate-300 rounded-xl py-2 pr-2">
                  <TbSquareRoundedLetterI className="text-2xl text-blue-600 -ml-3 -mt-5 bg-white border-2 border-white rounded-lg p-0.5"/>
                  <p className="leading-3 my-auto mx-auto truncate">{booking.childQuatitiy}</p>
                </div>
                  <div key={key} id={key.toString()} onClick={() => {
                      setLoading(true);
                        const response = fetch("/api/sleep/setConfirmed", {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                          id: booking.id,
                          confirmed: booking.confirmed,
                        }),
                      }).then((res) => {
                        if(res.status === 200){
                          toast.success(booking.confirmed ? "Reserva anulada":"Reserva confirmada");
                          booking.confirmed = !booking.confirmed;
                          console.log(booking.confirmed);
                          setLoading(false);
                        }else{
                          toast.success("Hi ha hagut un problema, torni-ho a intentar!");
                          setLoading(false);
                        }
                      })
                    }} className={`flex flex-row basis-20 relative justify-evenly rounded-xl py-2 pr-2 text-white cursor-pointer ${booking.confirmed ? "bg-lime-500":"bg-red-400"}`}>
                    {booking.confirmed ? <><BsFillBookmarkCheckFill className="text-2xl text-blue-600 -ml-3 -mt-5 bg-white border-2 border-white rounded-lg p-0.5"/></>:<><BsFillBookmarkXFill className="text-2xl text-blue-600 -ml-3 -mt-5 bg-white border-2 border-white rounded-lg p-0.5"/></>}
                    <p className="leading-3 my-auto mx-auto truncate">{loading ? <LoadingDots/>:""}</p>
                  </div>
              </div>
            </>
          )
        })}
      </div>
    </>
    
  )
}