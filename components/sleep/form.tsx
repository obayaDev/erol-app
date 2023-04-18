"use client"

import BookingCalendar from "@/components/sleep/BookingCalendar";
import Link from "next/link"
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import LoadingDots from "@/components/login/loading-dots";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { min } from "date-fns";
import { events } from "@prisma/client";


export default function SleepForm(){

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [dateIn, setDateIn] = useState(new Date());
  const [dateOut, setDateOut] = useState(new Date());

  function addHourToDate(date: Date, hm: string){
    const hourMinute = hm;
    const [hour, minute] = hourMinute.split(":");
    date.setHours(Number(hour), Number(minute));
  }

  return(
    <>
    <form 
            
            className="flex w-fit flex-col space-y-4 mx-auto rounded-2xl"
          
            onSubmit={(e) => {
              e.preventDefault();

              addHourToDate(dateIn, e.currentTarget.timeIn.value);
              addHourToDate(dateOut, e.currentTarget.timeOut.value);

              fetch("api/registerSleep", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  email: e.currentTarget.email.value,
                  phone: e.currentTarget.phone.value,
                  name: e.currentTarget.nombre.value,
                  firstName: e.currentTarget.firstName.value,
                  group: e.currentTarget.group.value,
                  comments: e.currentTarget.comments.value,
                  dateIn: dateIn,
                  dateOut: dateOut,
                  capsQuatitiy: e.currentTarget.capsQuatitiy.value,
                  childQuatitiy: e.currentTarget.childQuatitiy.value,
                }),
              }).then(async (res) => {
                setLoading(false);
                if (res.status === 200) {
                  toast.success("Reserva feta! Redireccionant a la pàgina principal");
                }else if(res.status === 400){
                  toast.error("Ja hi ha una reserva feta amb aquest correu")
                }else {
                  toast.error(await res.text());
                }
              });
            }}
          
          >
            <div className="w-full flex flex-col space-y-4 p-4 rounded-xl">
              <div className="flex flex-row space-x-4">
                <input name="email" type="email" placeholder='Email' className="w-2/3 rounded-lg my-auto shadow-md px-2 py-1 max-h-6 invalid:border-pink-500 invalid:text-pink-600" required></input>
                <input name="phone" type="tel" placeholder='Telefon' className="w-1/3 rounded-lg my-auto shadow-md px-2 py-1 max-h-6" required></input>
              </div>
              <div className="flex flex-row space-x-4">
                <input name="nombre" type="text" placeholder='Nom del contacte' className="w-1/2 rounded-lg my-auto shadow-md px-2 py-1 max-h-6" required></input>
                <input name="firstName" type="text" placeholder='Cognom' className="w-1/2 rounded-lg my-auto shadow-md px-2 py-1 max-h-6" required></input>
              </div>
              <div className="flex flex-row space-x-4 w-full">
                <input name="group" type="text" placeholder='Agrupament' className="w-7/12 rounded-lg my-auto shadow-md px-2 py-1 max-h-6" required></input>
                <input name="comments" type="text" placeholder='Comentaris / preguntes' className="w-full rounded-lg my-auto shadow-md px-2 py-1 max-h-6" required></input>
              </div>
            </div>
            <div className="flex flex-row space-x-8 mx-auto">
              <div className="flex flex-col text-center">
                <h1 className="text-stone-500 font-bold text-sm inline-block align-bottom mb-2 lg:text-xs">Horara d'arribada</h1>
                <input name="timeIn" type="time" min="8:00" max="20:00" className="rounded-full px-2 py-1 md:py-0 mx-auto" required></input>
              </div>
              <div className="flex flex-col text-center">
                <h1 className="text-stone-500 font-bold text-sm inline-block align-bottom mb-2 lg:text-xs">Horara de sortida</h1>
                <input name="timeOut" type="time" min="8:00" max="20:00" className="rounded-full px-2 py-1 md:py-0 mx-auto" required></input>
              </div>
            </div>
            <div className="mx-auto">
              <BookingCalendar setDateIn={setDateIn} setDateOut={setDateOut}/>
            </div>
            <div className="flex flex-row space-x-8 mx-auto">
                <div className="flex flex-col text-center">
                  <h1 className="text-stone-500 font-bold text-sm inline-block align-bottom mb-2 lg:text-xs">Numero de caps</h1>
                  <input name="capsQuatitiy" type="text" placeholder="5" className="rounded-full px-2 py-1 md:py-0 mx-auto text-center w-10" required></input>
                </div>
                <div className="flex flex-col text-center">
                  <h1 className="text-stone-500 font-bold text-sm inline-block align-bottom mb-2 lg:text-xs">Numero d'infants</h1>
                  <input name="childQuatitiy" type="text" placeholder="23" className="rounded-full px-2 py-1 md:py-0 mx-auto text-center w-10" required></input>
                </div>
            </div>
            <div className="flex justify-evenly pb-2">
              <button
                type="submit"
                disabled={loading}
                className={`${
                  loading
                    ? "cursor-not-allowed bg-blue-200"
                    : "bg-blue-500"
                } text-center uppercas shadow-lg hover:shadow-stone-400 px-4 py-2 rounded-md text-base text-slate-100 font-bold md:text-xs`}
              >
                {loading ? (
                  <LoadingDots color="#808080" />
                ) : (
                  <p>Fer reserva</p>
                )}
              </button>
            </div>
          </form>
    </>
  );
}