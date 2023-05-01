import { FaHandPointRight, FaExclamation } from "react-icons/fa"
import SleepForm from "@/components/sleep/form";
import TestEmailBtn from "@/components/sleep/testEmailBtn";
import { TbSquareRoundedNumber1Filled, TbSquareRoundedNumber2Filled, TbSquareRoundedNumber3Filled, TbSquareRoundedNumber4Filled } from "react-icons/tb";
import { RiQuestionnaireFill } from "react-icons/ri";

export default function Dormir(){

  return(
    <main className="my-auto mx-auto">
        <div className="flex flex-col mt-4 lg:mt-0 lg:flex-row">

          <div className="flex w-fit flex-col space-y-4 mx-auto rounded-2xl lg:mx-0 lg:text-sm border-4 py-2 border-stone-200 shadow-lg">
            <div className="-mb-4 text-center">
              <h1 className="text-blue-600 font-extrabold text-xs inline-block align-bottom uppercase lg:text-xs">Formulari de reserva per dormir al cau</h1>
            </div>
            <SleepForm/>
          </div>

          <div className="flex flex-col my-5 lg:mt-0 px-8 max-w-lg">
            <div className="mt-3.5">
              <h1 className="text-blue-600 font-extrabold text-sm inline-block align-bottom uppercase lg:text-xs">Instruccions</h1>
            </div>
            <div className="flex flex-col gap-y-2 justify-star px-4 py-4">
              <div className="flex flex-row gap-x-1">
                <div className="basis-1/12 h-fit my-auto text-red-600"><FaExclamation className="mx-auto text-xs"/></div>
                <div className="text-xs basis-11/12 font-semibold"><span className="text-red-600">Vigilar</span> que el correu estigui ben escrit</div>
              </div>
              <div className="flex flex-row gap-x-1">
                <div className="basis-1/12 h-fit my-auto"><TbSquareRoundedNumber1Filled className="mx-auto text-base"/></div>
                <div className="text-xs basis-11/12">Omplir el formulari</div>
              </div>
              <div className="flex flex-row gap-x-1">
                <div className="basis-1/12 h-fit my-auto"><TbSquareRoundedNumber2Filled className="mx-auto text-base"/></div>
                <div className="text-xs basis-11/12">Clicar a <span className="font-semibold">Fer reserva</span></div>
              </div>
              <div className="flex flex-row gap-x-1">
                <div className="basis-1/12 h-fit my-auto"><TbSquareRoundedNumber3Filled className="mx-auto text-base"/></div>
                <div className="text-xs basis-11/12">Esperar al popup</div>
              </div>
              <div className="flex flex-row gap-x-1">
                <div className="basis-1/12 h-fit my-auto"><TbSquareRoundedNumber4Filled className="mx-auto text-base"/></div>
                <div className="text-xs basis-11/12">Comprovar si us ha arribat el correu amb un document adjunt (mirar a la carpeta de spam) </div>
              </div>
            </div>
            <div className="mt-3.5">
              <h1 className="text-blue-600 font-extrabold text-sm inline-block align-bottom uppercase lg:text-xs">Infos vàries</h1>
            </div>
            <div className="flex flex-col gap-y-2 justify-star px-4 py-4">
              <div className="flex flex-row gap-x-1">
                <div className="basis-1/12 h-fit my-auto"><FaHandPointRight className="mx-auto text-base"/></div>
                <div className="text-xs basis-11/12">Si no ha arribat mira de posar bé el correu i reenviar-ho o escriure'n un altre</div>
              </div>
              <div className="flex flex-row gap-x-1">
                <div className="basis-1/12 h-fit my-auto"><FaHandPointRight className="mx-auto text-base"/></div>
                <div className="text-xs basis-11/12">Les instruccions i normativa es troben al correu i al document respectivament</div>
              </div>
              <div className="flex flex-row gap-x-1">
                <div className="basis-1/12 h-fit my-auto"><FaHandPointRight className="mx-auto text-base"/></div>
                <div className="text-xs basis-11/12">És un sistema automatitzat, si teniu qualsevol problema contacteu amb dormir@erol.cat (les reserves només seran vàlides per la web no por correu)</div>
              </div>
            </div>
          </div>
        </div>
    </main>
  );
}