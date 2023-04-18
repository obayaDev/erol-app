"use client"

import Link from "next/link";
import React from "react";
import { ClassNames } from "react-date-range";

export default function Btn(

  props:{
    toExecute: any
    children: React.ReactNode
    className?: string
  }){

  return(
    <>
      <button onClick={props.toExecute} className={props.className}>{props.children}</button>
    </>
  );
}