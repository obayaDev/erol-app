import NewsSearchBar from "@/components/news/searchBar";
import NoticeBoard from "@/components/news/noticeBoard";
import Link from "next/link"
import Image from "next/image"
import img1 from "../../public/home/home1.jpg"


export default function News() {

  return (
    <main className="">
      <div className="w-full my-5">
        <NewsSearchBar />
      </div>
      <div className="flex my-5 md:hidden">
        <h1 className="text-blue-600 font-extrabold text-sm inline-block align-bottom uppercase">Notícies i informacions</h1>
      </div>
      <div className="flex flex-col w-fit mx-auto md:flex-row md:justify-evenly md:space-x-3 xl:space-x-8">
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
        <Link href="/" className="text-center uppercase bg-blue-500 shadow-lg hover:shadow-stone-400 px-4 py-2 rounded-md text-base text-slate-100 font-bold md:text-xs">+</Link>
      </div>
    </main>
  );
}
