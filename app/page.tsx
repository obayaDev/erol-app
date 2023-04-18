import Link from "next/link"
import prisma from "../prisma/client"
import NoticeBoard from "@/components/news/noticeBoard"

import Image from "next/image"
import img1 from "../public/home/home1.jpg"
import img2 from "../public/home/home2.jpg"



let nums = [
  [1, 145, "Infants i joves"],
  [2, 32, "Caps i quel·les"],
  [3, 35, "Sabateres"],
  [4, 1, "Família"],
]

let news = [
  [1, img1, "Ja pots inscriute't als Campaments 2022"],
  [2, img1, "Comença la SOCA d'inici de curs"],
  [3, img1, "Sortida a la Platja per celebrar el final de curs"],
]

export default async function Home() {

  //const data = await prisma.users.findMany()
  //console.log(data)

  return (
    <main className="">
        <div id="1stParagraf" className="flex flex-col space-y-8 lg:space-y-0 lg:flex-row lg:space-x-8 xl:space-x-16 mb-8 mt-4">
          <div className="w-full max-w-2xl mx-auto lg:max-w-none">
            <div className='aspect-w-16 aspect-h-10 h-full rounded-xl overflow-hidden shadow-md'><Image src={img1} layout="fill" objectFit="cover" alt="" className=''/></div>
          </div>
          <div className="w-full max-w-2xl flex flex-row mx-auto lg:max-w-none">
            <div className='w-6/12 aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-md'><Image src={img1} layout="fill" objectFit="cover" alt="" className=''/></div>
            <div className="w-9/12 pl-6 pr-4 my-auto">
              <h1 className="my-2 text-lg uppercase font-extrabold text-blue-700 tracking-widest sm:text-lg md:text-xl lg:text-xl xl:text-3xl lg:leading-relaxed xl:leading-10">Deixem el món millor de com l'hem trobat</h1>
              <p className="md:py-4 md:leading-6 lg:leading-relaxed xl:leading-relaxed tracking-wider sm:text-base md:text-base lg:text-lg xl:text-xl">Som un cau resident a Sant Celoni, formem part de <span className="text-blue-500 font-medium">MEG</span> (Minyons escoltes i guies). Eduquem a partir del lleure i els valors en tots els àmbits de la vida.</p>
              <div className="my-4 xl:my-6"><Link href="/" className="px-4 py-2 uppercase bg-blue-600  rounded-md text-slate-100 font-bold text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl xl:px-6 xl:py-4">història del cau</Link></div>
            </div>
          </div>
        </div>

        <div id="2ndParagraf" className="flex flex-col space-y-8 lg:space-y-0 lg:flex-row lg:space-x-8 xl:space-x-16 mt-2 xl:mt-14 mb-8">
          <div className="w-full my-auto flex flex-row space-x-8 text-center mx-auto max-w-2xl lg:max-w-none">
              {nums.map((num) => {
                return(
                  <div className="flex flex-col space-y-4 w-1/4">
                    <h1 className="text-xl font-extrabold text-blue-700 tracking-wider  sm:text-lg md:text-xl lg:text-xl xl:text-3xl">{num[1]}</h1>
                    <p className="text-xs sm:text-base md:text-base lg:text-lg xl:text-xl">{num[2]}</p>
                  </div>
                )
              })}
          </div>
          <div className="w-full max-w-2xl flex flex-row mx-auto rounded-xl overflow-hidden lg:max-w-none">
              <div className="w-1/2 bg-blue-600 flex flex-col justify-center px-2">
                <h1 className="uppercase text-center text-xl font-bold text-slate-100 tracking-widest sm:text-lg md:text-xl lg:text-xl xl:text-3xl">Caps i Quel·les</h1>
              </div>
              <div className="w-1/2">
                <div className='aspect-w-12 aspect-h-7 shadow-md'><Image src={img1} layout="fill" objectFit="cover" alt="" className=''/></div>
              </div>
          </div>
        </div>
        
        
        <div id="news" className="my-8 mx-auto w-fit">
          <div className="flex my-5">
            <h1 className="text-blue-600 font-extrabold text-sm inline-block align-bottom">TAULER D'INFORMACIONS</h1>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-8">
            <NoticeBoard
              img={img1}
              visits='18'
              public={true}
              tags={<>Sortida d'unitat<span className='text-blue-600'> | </span>Autorització</>}
              title={<>Primera sortida d'unitat</>}
              text={<>Les branques fan la primera <span className="text-blue-600 font-medium">sortida</span> de l'any! Prepareu les autoritzacions per entregar-les com a data límit el dia <span className="text-blue-600 font-medium">15 d'abril</span></>}
            />
            <NoticeBoard
              img={img1}
              visits='18'
              public={true}
              tags={<>Sortida d'unitat<span className='text-blue-600'> | </span>Autorització</>}
              title={<>Primera sortida d'unitat</>}
              text={<>Les branques fan la primera <span className="text-blue-600 font-medium">sortida</span> de l'any! Prepareu les autoritzacions per entregar-les com a data límit el dia <span className="text-blue-600 font-medium">15 d'abril</span></>}
            />
            <NoticeBoard
              img={img1}
              visits='18'
              public={true}
              tags={<>Sortida d'unitat<span className='text-blue-600'> | </span>Autorització</>}
              title={<>Primera sortida d'unitat</>}
              text={<>Les branques fan la primera <span className="text-blue-600 font-medium">sortida</span> de l'any! Prepareu les autoritzacions per entregar-les com a data límit el dia <span className="text-blue-600 font-medium">15 d'abril</span></>}
            />
          </div>
          <div className="flex justify-evenly my-3 mx-3 md:justify-start">
            <Link href="/noticies" className="text-center uppercase bg-blue-500 px-4 py-2 rounded-md text-slate-100 font-bold">Totes les notícies</Link>
          </div>
        </div>
      
    </main>
  )
}
