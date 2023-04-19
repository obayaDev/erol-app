import { FaHandPointRight } from "react-icons/fa"
import SleepForm from "@/components/sleep/form";

export default function Dormir(){

  return(
    <main className="my-auto mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="flex w-fit flex-col space-y-4 mx-auto rounded-2xl lg:mx-0 lg:text-sm border-4 py-2 border-stone-200 shadow-lg">
            <div className="-mb-4 text-center">
              <h1 className="text-blue-600 font-extrabold text-xs inline-block align-bottom uppercase lg:text-xs">Formulari de reserva per dormir al cau</h1>
            </div>
            <SleepForm/>
          </div>

          <div className="flex flex-col mt-5 lg:mt-0 px-8">
            <div className="mt-3.5">
              <h1 className="text-blue-600 font-extrabold text-sm inline-block align-bottom uppercase lg:text-xs">Normativa per dormir al Cau i informacions varies</h1>
            </div>
            <div className="flex flex-col justify-star px-4 py-4 space-y-3">
              <div className="flex flex-row">
                <FaHandPointRight/>
                <div className="my-auto px-2"><p className="text-xs">Tip: els dies en color clar no s'hi pot dormir o ja estan ocupats.</p></div>
              </div>
              <div className="flex flex-row">
                <FaHandPointRight/>
                <div className="my-auto px-2"><p className="text-xs">Feu la reserva i rebreu un correu de confirmació amb un document que haureu d'omplir, firmar i enviar dos dies abans de l'estança.</p></div>
              </div>
              <div className="flex flex-row">
                <FaHandPointRight/>
                <div className="my-auto px-2"><p className="text-xs">Els horaris d'entrada i sortida són de 8h a 20h.</p></div>
              </div>
              <div className="flex flex-row">
                <FaHandPointRight/>
                <div className="my-auto px-2"><p className="text-xs">Máxim s'admeten a 8 caps i 30 infants</p></div>
              </div>
              <div className="flex flex-row">
                <FaHandPointRight/>
                <div className="my-auto px-2"><p className="text-xs">Al enviar el formulari s'accepta les normes d'us de les instal·lacions especificades al formulari.</p></div>
              </div>
              <div className="flex flex-row">
                <FaHandPointRight/>
                <div className="my-auto px-2"><p className="text-xs">En cas de desperfecte es pasarà la factura dels danys causats a l'escola pq quedi tal i com l'hem trobat.</p></div>
              </div>
              <div className="flex flex-row">
                <FaHandPointRight/>
                <div className="my-auto px-2"><p className="text-xs">La página web està en procès de creació, l'apartat de reserves és totalment funcional però.</p></div>
              </div>
            </div>
          </div>
        </div>
    </main>
  );
}