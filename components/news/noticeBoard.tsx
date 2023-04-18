"use client";

import { AppProps } from 'next/app';
import ParagraphClick from "./pClick";
import Link from "next/link"
import Image, { StaticImageData } from "next/image"
import React from 'react';
import { MdVisibility, MdPublic, MdPublicOff } from 'react-icons/md'

export default function NoticeBoard(props:{img: StaticImageData, visits:string, public:boolean, tags:React.ReactNode, title:React.ReactNode, text:React.ReactNode}) {

    
    
    return (
        <div className='flex flex-col max-w-md mb-5'>
          <div className='aspect-w-16 aspect-h-11 relative rounded-xl overflow-hidden shadow-md'><Image src={props.img} layout="fill" objectFit="cover" alt="" className=''/></div>
          <div className='w-11/12 py-3 px-4 mx-auto bg-white rounded-xl overflow-hidden relative -mt-8 md:-mt-6 shadow-xl hover:shadow-stone-400 transition-shadow'>
            <div className='flex space-x-2'>
              <div className='flex text-xs bg-stone-300 text-white w-fit px-1.5 rounded-full shadow-md md:px-2'><p className='my-auto'>{props.visits}</p><MdVisibility className='ml-1 my-auto'/></div>
              <div className='my-auto text-sm'>{props.public ? <><MdPublic/></> : <><MdPublicOff/></>}</div>
              <p className='text-zinc-400 uppercase font-medium text-sm line-clamp-1 my-auto'>{props.tags}</p>
            </div>
            <h3 className='text-lg py-1 font-bold'>{props.title}</h3>
            <ParagraphClick>{props.text}</ParagraphClick>
          </div>
        </div>
    );
}

