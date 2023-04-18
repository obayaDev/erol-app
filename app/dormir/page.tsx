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
                <div className="my-auto px-2"><p className="text-xs">Aquí haurem d'escriure les normes q ara no les trobo</p></div>
              </div>
              <div className="flex flex-row">
                <FaHandPointRight/>
                <div className="my-auto px-2"><p className="text-xs">Aquí haurem d'escriure les normes q ara no les trobo</p></div>
              </div>
            </div>
          </div>
        </div>
    </main>
  );
}