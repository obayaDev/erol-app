"use client";

import { AppProps } from 'next/app';
import Link from "next/link"
import {useState } from "react"

export default function pClick({
    children,
  }: {
    children: React.ReactNode
  }) {
    const [clicked, setClicked] = useState(false)

    function showText(){
        setClicked(clicked => !clicked)
    }

    let toggleCalassLineClamp = clicked ? 'line-clamp-none':'line-clamp-2'
    
    return (
        <p onClick={showText} className={`cursor-pointer select-none ${toggleCalassLineClamp}`}>{children}</p>
    );
}