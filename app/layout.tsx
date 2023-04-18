import './globals.css'
import Link from 'next/link'

import Image from 'next/image'
import mainLogo from "../public/home/mainLogo.png"
import Toaster from "@/components/toaster";

export const metadata = {
  title: 'Pàgina principal',
  description: 'Qui som?',
}

export default function RootLayout(props:{children: React.ReactNode}) {
  return (
    <html lang="cat" className='bg-stone-100 text-stone-600 px-4 md:px-10 overflow-auto scrollbar-hide select-none'>

      <body className='flex flex-col h-screen py-2'>
        
        <nav className='text-neutral-500 font-bold text-xs md:text-sm md:px-2 lg:text-base lg:px-4 mx-auto xl:max-w-none xl:ml-6 xl:mr-10 xl:text-lg max-w-2xl lg:max-w-none'>
          <div className='flex flex-nowrap items-center justify-between mx-auto tracking-wide'>
            <Link href="/" className='flex items-center min-w-fit'>
              <Image src={mainLogo} alt="Home" className='w-5 h-5 xl:w-8 xl:h-8'/>
              <span  className='ml-2 focus:border-2 focus:border-stone-200 focus:rounded-lg focus:px-2 focus:py-1'>AEG Erol</span>
            </Link>
            <div className='space-x-2.5'>
              <Link href="/noticies" className=''>
                Notícies
              </Link>
              <Link href="/dormir" className=''>
                Dormir-hi
              </Link>
              <Link href="/families" className=''>
                Famílies
              </Link>
              <Link href="/caps" className=''>
                Caps
              </Link>
            </div>
          </div>
        </nav>
        <Toaster/>
        {props.children}

      </body>

    </html>
  )
}
