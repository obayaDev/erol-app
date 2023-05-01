"use client"
import { useState, useEffect} from "react"
import { useRouter } from 'next/router'
import LoadingDots from "../login/loading-dots";
import { BookingType } from "@/pages/api/sleep/getBookings";
import { BsBookmarksFill, BsCalendarDate, BsFillBookmarkCheckFill, BsFillBookmarkXFill } from "react-icons/bs"
import { TbClockHour3, TbSquareRoundedLetterN, TbSquareRoundedLetterG, TbSquareRoundedLetterC, TbSquareRoundedLetterI } from "react-icons/tb"
import { MdDelete, MdOutlineMarkEmailRead, MdOutlinePeople } from "react-icons/md"
import { AiTwotonePhone } from "react-icons/ai"
import { BsArrowDownCircleFill, BsArrowUpCircleFill } from "react-icons/bs"
import {FiDroplet} from "react-icons/fi"
import {RiDropFill} from "react-icons/ri"
import {ImDroplet} from "react-icons/im"
import {BiMailSend} from "react-icons/bi"

import toast from "react-hot-toast";

export default function BookingTable (props:{bookings: BookingType[]}){
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [keyOpen, setKeyOpen] = useState(0);
  props.bookings.forEach((booking) => {
    booking.dateIn = new Date(booking.dateIn);
    booking.dateOut = new Date(booking.dateOut);
  })

  let varBookings:BookingType[] = props.bookings;

  function handleConfirm(msg: string, funOK: Function, funCancel: Function) {
    const confirmed = window.confirm(msg);
  
    if (confirmed) {
      funOK();
    } else {
      funCancel();
    }
  }

  function getLetterMonth(dateIn: Date, dateOut: Date): string {
    const meses = ['Gener', 'Febrer', 'Març', 'Abril', 'Maig', 'Juny', 'Juliol', 'Agost', 'Setembre', 'Octubre', 'Novembre', 'Desembre'];
    if(dateIn.getMonth() === dateOut.getMonth()){
      return meses[dateIn.getMonth()];
    }else{
      const res = meses[dateIn.getMonth()] + "-" + meses[dateIn.getMonth()]
      return meses[dateIn.getMonth()];
    }
  }

  useEffect(() => {
    setLoading(false);
  }, [varBookings]);


  
  return(
    <>
      <div className="flex flex-col w-full my-10 transition-[height] gap-y-4 max-w-lg">

        <div className="flex flex-row w-full justify-start py-2 rounded-t-3xl rounded-b-xl shadow-xl bg-secondary">
          <div className="flex flex-row basis-2/6 justify-center py-1 md:py-2"><BsCalendarDate className="text-lg my-auto text-accent"/></div>
          <div className="flex flex-row basis-1/6 justify-center py-1 md:py-2"><TbClockHour3 className="text-xl my-auto text-accent"/></div>
          <div className="flex flex-row basis-1/6 justify-center py-1 md:py-2"><MdOutlinePeople className="text-2xl my-auto text-accent"/></div>
          <div className="flex flex-row basis-2/6 justify-center py-1 md:py-2"><BsBookmarksFill className="text-lg my-auto text-accent"/></div>
        </div>
        {varBookings.map((booking, key) => {
          const minnIn = booking.dateIn.getMinutes() < 10 ? "0" + booking.dateIn.getMinutes().toString():booking.dateIn.getMinutes().toString();
          const minnOut = booking.dateOut.getMinutes() < 10 ? "0" + booking.dateOut.getMinutes().toString():booking.dateOut.getMinutes().toString();
          return(
            <>
              <div className={`flex flex-row w-full text-xs md:text-bas py-1 bg-white ${key + 1 === varBookings.length ? "rounded-t-xl rounded-b-3xl":"rounded-xl"} shadow-lg ${booking.confirmed ? "":"shadow-lg"}`}>
                <div className="flex flex-col gap-y-0.5 basis-2/6 py-1"><span className="text-center font-semibold text-secondary">{booking.name}</span><span className="text-center">{getLetterMonth(booking.dateIn, booking.dateOut)} - {booking.dateIn.getDate()} | {booking.dateOut.getDate()}</span></div>
                <div className="flex flex-col gap-y-0.5 basis-1/6 justify-center py-1 md:py-2">
                  <div className="text-center">{booking.dateIn.getHours()}:{minnIn}</div>
                  <div className="text-center">{booking.dateOut.getHours()}:{minnOut}</div>
                </div>
                <div className="flex flex-col gap-y-0.5 basis-1/6 justify-center py-1 md:py-2">
                  <div className="text-center"><span>caps: </span>{booking.capsQuatitiy}</div>
                  <div className="text-center"><span>inf: </span>{booking.childQuatitiy}</div>
                </div>
                <div className="flex flex-row basis-2/6 justify-evenly py-1 md:py-2">
                  <span
                    onClick={() => {
                      handleConfirm(!booking.confirmed ? "Si acceptes la data quedarà reservada i el correu de confirmació serà enviat automàticament":"Si acceptes la data quedarà lliure i el correu d'anulació de la reserva serà enviat automàticament", () => {
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
                            booking.confirmed = !booking.confirmed;
                            toast.success(booking.confirmed ? "Reserva confirmada":"Reserva anulada", {duration: 3000});
                            const minIn = booking.dateIn.getMinutes() < 10 ? "0" + booking.dateIn.getMinutes().toString():booking.dateIn.getMinutes().toString();
                            const minOut = booking.dateOut.getMinutes() < 10 ? "0" + booking.dateOut.getMinutes().toString():booking.dateOut.getMinutes().toString();
                            const response = fetch("/api/email/sendEmail", {
                              method: "POST",
                              headers: {
                                "Content-Type": "application/json",
                              },
                              body: JSON.stringify({
                                email: booking.email,
                                subject: booking.confirmed ? "Reserva confirmada":"Reserva anulada",
                                text: booking.confirmed ? "La reserva de les dates " + getLetterMonth(booking.dateIn, booking.dateOut) + " - " + booking.dateIn.getDate() + " | " + booking.dateOut.getDate() + " queda confirmada. Amb hora d'entrada: " + booking.dateIn.getHours() + ":" + minIn + " i horar de sortida: " + booking.dateOut.getHours() + ":" + minOut + ". Per acabar de quadrar l'hora contacteu un dia abans amb en Jan Garçot: 638160750":"La reserva dels dies " + getLetterMonth(booking.dateIn, booking.dateOut) + " - " + booking.dateIn.getDate() + " | " + booking.dateOut.getDate() + " queda anulada. Per qualsevol cosa contacteu amb Alex Obaya al 634570978",
                                file: false,
                              }),
                            }).then((res) => {
                              if(res.status === 200){
                                toast.success("Email enviat", {duration: 3000});
                                setLoading(false);
                                window.location.reload()
                              }else{
                                toast.error("Hi ha hagut un problema, torni-ho a intentar!", {duration: 3000});
                                setLoading(false);
                              }
                            });
                          }else{
                            toast.error("Hi ha hagut un problema, torni-ho a intentar!", {duration: 3000});
                            setLoading(false);
                          }
                        });
                      }, () => {
                        toast.error("Acció cancelada", {duration: 3000});
                      });
                      
                    }}
                    className="my-auto text-lg cursor-pointer">{booking.confirmed ? <><BsFillBookmarkCheckFill className="opacity-60 text-emerald-400"/></>:<><BsFillBookmarkXFill className="opacity-60 text-red-700"/></>}</span>
                  <span 
                    onClick={() => {
                      handleConfirm("Accepta si vols eliminar la reserva del " + getLetterMonth(booking.dateIn, booking.dateOut) + " - " + booking.dateIn.getDate() + " | " + booking.dateOut.getDate() + ". ATENCIÓ Les dades no es podran recuperar!", () => {
                        setLoading(true);
                        const response = fetch("/api/sleep/deleteSleepForm", {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify({
                            id: booking.id,
                          }),
                        }).then((res) => {
                          window.location.reload()
                          if(res.status === 200){
                            toast.success("Reserva eliminada");
                            setLoading(false);
                          }else{
                            toast.error("Hi ha hagut un problema, torni-ho a intentar!");
                            setLoading(false);
                          }
                        })
                      }, () => {
                        toast.error("Acció cancelada");
                      });
                    }}
                    className="my-auto text-xl cursor-pointer opacity-75 text-accent"><MdDelete/></span>
                </div>
              </div>
            </>
          )
        })}
        {/* <div className="flex flex-row gap-x-1">

              <div  onClick={() => {handleOpenDiv(key)}} className={`${key === keyOpen && open ? "h-24":"h-14"} cursor-pointer flex flex-row w-full flex-wrap justify-evenly overflow-hidden gap-x-4 gap-y-4 py-4 px-4 rounded-l-xl bg-white shadow-lg transition-[height]`}>
                <div className="flex flex-row basis-28 relative justify-evenly bg-slate-300 rounded-xl py-2 pl-3 pr-2">
                  <BsCalendarDate className="text-2xl text-blue-600 -ml-6 -mt-5 bg-white border-2 border-white rounded-lg p-0.5"/>
                  <p className="leading-3 my-auto">{booking.dateIn.getMonth()}/{booking.dateIn.getDate()} - {booking.dateOut.getMonth()}/{booking.dateOut.getDate()}</p>
                </div>
                <div className="flex flex-row basis-32 relative justify-evenly bg-slate-300 rounded-xl py-2 pr-2">
                  <TbClockHour3 className="text-2xl text-blue-600 -ml-3 -mt-5 bg-white border-2 border-white rounded-xl p-0.5"/>
                  <p className="leading-3 my-auto">{booking.dateIn.getHours()}:{booking.dateIn.getMinutes() === 0 ? "00":booking.dateOut.getMinutes()} - {booking.dateOut.getHours()}:{booking.dateOut.getMinutes() === 0 ? "00":booking.dateOut.getMinutes()}</p>
                </div>
                <div className="flex flex-row relative justify-evenly bg-slate-300 rounded-xl py-2 pr-2">
                  <AiTwotonePhone className="text-2xl text-blue-600 -ml-3 -mt-5 bg-white border-2 border-white rounded-xl p-0.5"/>
                  <p className="leading-3 my-auto mx-auto truncate">{booking.phone}</p>
                </div>
                <div className="flex flex-row relative justify-evenly bg-slate-300 rounded-xl py-2 pr-2">
                  <TbSquareRoundedLetterG className="text-2xl text-blue-600 -ml-3 -mt-5 bg-white border-2 border-white rounded-lg p-0.5"/>
                  <p className="leading-3 my-auto mx-auto truncate">{booking.group}</p>
                </div>
                <div className="flex flex-row relative justify-evenly bg-slate-300 rounded-xl py-2 pr-2">
                  <TbSquareRoundedLetterC className="text-2xl text-blue-600 -ml-3 -mt-5 bg-white border-2 border-white rounded-lg p-0.5"/>
                  <p className="leading-3 my-auto mx-auto truncate">{booking.capsQuatitiy}</p>
                </div>
                <div className="flex flex-row relative justify-evenly bg-slate-300 rounded-xl py-2 pr-2">
                  <TbSquareRoundedLetterI className="text-2xl text-blue-600 -ml-3 -mt-5 bg-white border-2 border-white rounded-lg p-0.5"/>
                  <p className="leading-3 my-auto mx-auto truncate">{booking.childQuatitiy}</p>
                </div>
                <div className="flex flex-row relative justify-evenly bg-slate-300 rounded-xl py-2 pr-2">
                  <TbSquareRoundedLetterN className="text-2xl text-blue-600 -ml-3 -mt-5 bg-white border-2 border-white rounded-lg p-0.5"/>
                  <p className="leading-3 my-auto mx-auto truncate">{booking.name} {booking.firstName}</p>
                </div>
                <div className="flex flex-row relative justify-evenly bg-slate-300 rounded-xl py-2 pr-2">
                  <MdOutlineMarkEmailRead className="text-2xl text-blue-600 -ml-3 -mt-5 bg-white border-2 border-white rounded-lg p-0.5"/>
                  <p className="leading-3 my-auto mx-auto truncate">{booking.email}</p>
                </div>
              </div>
              <div className="flex flex-row px-4 h-14 py-3.5 gap-x-4 bg-white rounded-r-xl shadow-xl ">
                <div onClick={() => {
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
                          setLoading(false);
                        }else{
                          toast.success("Hi ha hagut un problema, torni-ho a intentar!");
                          setLoading(false);
                        }
                      })
                    }} className={`flex flex-row w-16 relative justify-evenly rounded-lg py-2 pr-2 text-white cursor-pointer ${booking.confirmed ? "bg-lime-500":"bg-red-400"}`}>
                    {booking.confirmed ? <><BsFillBookmarkCheckFill className="text-2xl text-blue-600 -ml-3 -mt-5 bg-white border-2 border-white rounded-lg p-0.5"/></>:<><BsFillBookmarkXFill className="text-2xl text-blue-600 -ml-3 -mt-5 bg-white border-2 border-white rounded-lg p-0.5"/></>}
                    <p className="leading-3 my-auto mx-auto truncate">{loading ? <LoadingDots/>:""}</p>
                </div>
              </div>
            </div> */}
        {/* <ImDroplet className="text-5xl mx-auto my-4 text-white bg-gradient-to-tr from-teal-600 to-emerald-400 p-2 rounded-xl"/> */}
      </div>
    </>
    
  )
}