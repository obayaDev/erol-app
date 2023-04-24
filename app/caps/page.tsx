
import { MdWallpaper, MdOutlineFamilyRestroom } from "react-icons/md"
import { FaHandPointRight } from "react-icons/fa"
import { BsArrowDownCircleFill, BsArrowUpCircleFill, BsBookmarkCheck, BsCardChecklist } from "react-icons/bs"
import SignOut from "@/components/login/sign-out";


import MenuPadSlide from "@/components/caps/menuPad";

export default function Caps(){

  return(
    <div className="flex flex-col w-fit mx-auto">
      <MenuPadSlide 
        title="crea i edita notícies" 
        btnTitle="info" 
        btnIconOpened={<BsArrowDownCircleFill 
        className="my-auto ml-2"/>} 
        btnIconClosed={<BsArrowDownCircleFill 
        className="my-auto ml-2"/>} 
        hOpened={62} hClosed={3}
        path="/caps/noticies"
        mainIcon={<MdWallpaper className="-mt-7 -ml-7 text-3xl text-blue-600 bg-stone-100 border-2 border-stone-100 rounded-md"/>}
        >

        <div className="flex flex-col lg:mt-0 px-8">
          <div className="mt-2">
            <h1 className="text-blue-600 font-extrabold text-sm inline-block align-bottom uppercase lg:text-xs">Quin és el fi de crear notícies?</h1>
          </div>
          <div className="flex flex-col justify-star px-4 py-4 space-y-3 text-xs">
            <div className="flex flex-row">
              <FaHandPointRight className="min-w-fit"/>
              <div className="my-auto px-2"><p>Principalment informar a les famílies de les diferents activitats que realitzen els infants al llarg del curs</p></div>
            </div>
            <div className="flex flex-row">
              <FaHandPointRight className="min-w-fit"/>
              <div className="my-auto px-2"><p>Informar de la publicació de les autoritzacions i de les dates d'entrega d'aquestes</p></div>
            </div>
            <div className="flex flex-row">
              <FaHandPointRight className="min-w-fit"/>
              <div className="my-auto px-2"><p>Donar a coneixer qualsevol tema, com per exemple, la SOCA o la TRAG. Tot explicant que es fa, les dates, etc.</p></div>
            </div>
          </div>
        </div>
      </MenuPadSlide>

      <MenuPadSlide 
        title="Gestiona Reserves" 
        btnTitle="info" 
        btnIconOpened={<BsArrowDownCircleFill 
        className="my-auto ml-2"/>} 
        btnIconClosed={<BsArrowDownCircleFill 
        className="my-auto ml-2"/>} 
        hOpened={62} hClosed={3}
        path="/caps/dormir"
        mainIcon={<BsBookmarkCheck className="-mt-7 -ml-7 text-3xl text-blue-600 bg-stone-100 border-2 border-stone-100 rounded-md"/>}
        >

        <div className="flex flex-col lg:mt-0 px-8">
          <div className="mt-2">
            <h1 className="text-blue-600 font-extrabold text-sm inline-block align-bottom uppercase lg:text-xs">Funcionalitats</h1>
          </div>
          <div className="flex flex-col justify-star px-4 py-4 space-y-3 text-xs">
            <div className="flex flex-row">
              <FaHandPointRight className="min-w-fit"/>
              <div className="my-auto px-2"><p>Principalment informar a les famílies de les diferents activitats que realitzen els infants al llarg del curs</p></div>
            </div>
            <div className="flex flex-row">
              <FaHandPointRight className="min-w-fit"/>
              <div className="my-auto px-2"><p>Informar de la publicació de les autoritzacions i de les dates d'entrega d'aquestes</p></div>
            </div>
            <div className="flex flex-row">
              <FaHandPointRight className="min-w-fit"/>
              <div className="my-auto px-2"><p>Donar a coneixer qualsevol tema, com per exemple, la SOCA o la TRAG. Tot explicant que es fa, les dates, etc.</p></div>
            </div>
          </div>
        </div>
      </MenuPadSlide>

      <MenuPadSlide 
        title="Crea i edita Famílies" 
        btnTitle="info" 
        btnIconOpened={<BsArrowDownCircleFill 
        className="my-auto ml-2"/>} 
        btnIconClosed={<BsArrowDownCircleFill 
        className="my-auto ml-2"/>} 
        hOpened={62} hClosed={3}
        path="/noticies"
        mainIcon={<MdOutlineFamilyRestroom className="-mt-7 -ml-7 text-3xl text-blue-600 bg-stone-100 border-2 border-stone-100 rounded-md"/>}
        >

        <div className="flex flex-col lg:mt-0 px-8">
          <div className="mt-2">
            <h1 className="text-blue-600 font-extrabold text-sm inline-block align-bottom uppercase lg:text-xs">Funcionalitats</h1>
          </div>
          <div className="flex flex-col justify-star px-4 py-4 space-y-3 text-xs">
            <div className="flex flex-row">
              <FaHandPointRight className="min-w-fit"/>
              <div className="my-auto px-2"><p>Principalment informar a les famílies de les diferents activitats que realitzen els infants al llarg del curs</p></div>
            </div>
            <div className="flex flex-row">
              <FaHandPointRight className="min-w-fit"/>
              <div className="my-auto px-2"><p>Informar de la publicació de les autoritzacions i de les dates d'entrega d'aquestes</p></div>
            </div>
            <div className="flex flex-row">
              <FaHandPointRight className="min-w-fit"/>
              <div className="my-auto px-2"><p>Donar a coneixer qualsevol tema, com per exemple, la SOCA o la TRAG. Tot explicant que es fa, les dates, etc.</p></div>
            </div>
          </div>
        </div>
      </MenuPadSlide>

      <MenuPadSlide 
        title="Llista d'assistència" 
        btnTitle="info" 
        btnIconOpened={<BsArrowDownCircleFill 
        className="my-auto ml-2"/>} 
        btnIconClosed={<BsArrowDownCircleFill 
        className="my-auto ml-2"/>} 
        hOpened={62} hClosed={3}
        path="/noticies"
        mainIcon={<BsCardChecklist className="-mt-7 -ml-7 text-3xl w-8 text-blue-600 bg-stone-100 border-2 border-stone-100 rounded-md"/>}
        >

        <div className="flex flex-col lg:mt-0 px-8">
          <div className="mt-2">
            <h1 className="text-blue-600 font-extrabold text-sm inline-block align-bottom uppercase lg:text-xs">Funcionalitats</h1>
          </div>
          <div className="flex flex-col justify-star px-4 py-4 space-y-3 text-xs">
            <div className="flex flex-row">
              <FaHandPointRight className="min-w-fit"/>
              <div className="my-auto px-2"><p>Principalment informar a les famílies de les diferents activitats que realitzen els infants al llarg del curs</p></div>
            </div>
            <div className="flex flex-row">
              <FaHandPointRight className="min-w-fit"/>
              <div className="my-auto px-2"><p>Informar de la publicació de les autoritzacions i de les dates d'entrega d'aquestes</p></div>
            </div>
            <div className="flex flex-row">
              <FaHandPointRight className="min-w-fit"/>
              <div className="my-auto px-2"><p>Donar a coneixer qualsevol tema, com per exemple, la SOCA o la TRAG. Tot explicant que es fa, les dates, etc.</p></div>
            </div>
          </div>
        </div>
      </MenuPadSlide>
      <div className="mt-8 mx-auto">
        <SignOut/>
      </div>
    </div>
  );
}