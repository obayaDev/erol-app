"use client"
import { useState, useEffect} from "react"
import LoadingDots from "../login/loading-dots";
import { BookingType } from "@/pages/api/sleep/getBookings";
import { BsCalendarDate, BsFillBookmarkCheckFill, BsFillBookmarkXFill, BsHourglass, BsBookmarksFill } from "react-icons/bs"
import { TbClockHour3, TbSquareRoundedLetterN, TbSquareRoundedLetterG, TbSquareRoundedLetterC, TbSquareRoundedLetterI } from "react-icons/tb"
import { MdOutlineMarkEmailRead, MdOutlinePeople } from "react-icons/md"
import { AiTwotonePhone } from "react-icons/ai"
import { BsArrowDownCircleFill, BsArrowUpCircleFill } from "react-icons/bs"
import {FiDroplet} from "react-icons/fi"
import {RiDropFill} from "react-icons/ri"
import {ImDroplet} from "react-icons/im"
import { IoMdContact } from "react-icons/io" 

import toast from "react-hot-toast";

export default function BookingTable (props:{bookings: BookingType[]}){
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [keyOpen, setKeyOpen] = useState(0);
  let classOpen = open ? '':''
  props.bookings.forEach((booking) => {
    booking.dateIn = new Date(booking.dateIn);
    booking.dateOut = new Date(booking.dateOut);
  })

  let varBookings:BookingType[] = props.bookings;

  function handleOpenDiv(key: number){
    setOpen(open => !open);
    setKeyOpen(key);
    console.log(keyOpen);
    return
  }

  useEffect(() => {
    setLoading(false);
  }, [varBookings]);
  
  return(
    <>
      <div className="flex flex-col w-full gap-y-2 mt-10 transition-[height] text-xs md:text-base">
        <div className="flex flex-row w-full justify-start bg-white py-4 rounded-t-3xl shadow-md">
          <div className="flex flex-row basis-1/3 justify-center py-1 md:py-2"><BsCalendarDate className="mr-2 text-sm md:text-base my-auto"/><span className="leading-3 my-auto">Dates</span></div>
          <div className="flex flex-row basis-1/3 justify-center py-1 md:py-2 border-l-2 border-l-slate-300"><TbClockHour3 className="mr-2 text-sm md:text-base my-auto"/><span className="leading-3 my-auto">Horaris</span></div>
          <div className="flex flex-row basis-1/6 justify-center py-1 md:py-2 border-l-2 border-l-slate-300"><MdOutlinePeople className=" text-lg md:text-base my-auto"/></div>
          <div className="flex flex-row basis-1/6 justify-center py-1 md:py-2 border-l-2 border-l-slate-300 "><BsBookmarksFill className=" text-sm md:text-base my-auto"/></div>
        </div>
        {/* {varBookings.map((booking, key) => {
          return(
            <>
            <div key={`${key}`} className="flex flex-row gap-x-1">

              <div key={`${key}sdfgknergkj`} className="flex flex-row w-full justify-center bg-white py-4 gap-x-2 shadow-md">
                <div key={`${key}asdasd`} className="basis-1/3 justify-center">
                  <div key={`${key}sfsdfdrfer`} className="text-center">{booking.dateIn.getMonth().toLocaleString()}/{booking.dateIn.getDate()}</div>
                  <div key={`${key}sdfdrfersdfer`}className="text-center">{booking.dateOut.getMonth()}/{booking.dateOut.getDate()}</div>                  
                </div>
              </div>

              
            </div>
            </>
          )
        })} */}
        {/* <ImDroplet className="text-5xl mx-auto my-4 text-white bg-gradient-to-tr from-teal-600 to-emerald-400 p-2 rounded-xl"/> */}
      </div>
    </>
    
  )
}