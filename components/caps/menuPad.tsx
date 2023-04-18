"use client"

import Link from "next/link";
import Btn from "@/components/caps/btn";
import { Children, useState } from "react";

export default function MenuPadSlide(
  props:{
    children: React.ReactNode
    title: string
    btnTitle?: string
    btnIconOpened?: React.ReactNode
    btnIconClosed?: React.ReactNode
    hOpened: number
    hClosed: number
    path: string
    mainIcon: React.ReactNode
  }
){
  const [open, setOpen] = useState(false);

  function handleOpenDiv(){
    setOpen(open => !open);
  }

  let classOpen = open ? 'h-64':'h-4' //`h-${props.hOpened}`:`h-${props.hClosed}`
  let plusLessOpen = open ? props.btnIconOpened:props.btnIconClosed

  return(
    <div className="flex flex-col mt-10 px-2 relative max-w-sm lg:text-xs">
      <div className="flex flex-row relative justify-between bg-stone-200 rounded-xl px-3 py-3 shadow-md">
        {props.mainIcon}
        <Link href={props.path} className="my-auto"><h1 className="font-bold uppercase">{props.title}</h1></Link>
        <Btn toExecute={handleOpenDiv} className="px-3 py-1 bg-blue-500 text-white rounded-lg flex">info {plusLessOpen}</Btn>
      </div>
      <div className={`${classOpen} mx-4 pt-2 overflow-hidden bg-white rounded-b-xl shadow-lg transition-[height]`}>
        {props.children}
      </div>
    </div>
  );
}