
import prisma from "@/prisma/client";

export default async function Assistencia(){
  /* await prisma.branches.create({
    data: {
      name: "Castors i Lludrigues",
      branch: "cills",
      year_in: 2015,
      year_out: 2016,
      image_path: "/"
    }
  }); */
  /* const rows = await prisma.branches.findUnique({
    where: {id: 1},
    select:{ User: true}
  }); */

  function generateArrayFromToYear (start: number, end:number){
    const array:number[] = []
    for (let year = start; year <= end; year++){
      array.push(year);
    }
    return array
  }

  const options = generateArrayFromToYear(new Date().getFullYear() - 18, new Date().getFullYear() - 7);

  return(

    <div className="flex flex-col py-5 gap-y-5">
      <div className="flex flex-col w-full gap-y-2 bg-secondary bg-opacity-80 shadow-lg rounded-3xl p-2 text-sm">
        <div className="flex flex-row gap-x-3 px-1 py-1">
          <div className="basis-4/12 my-auto h-full"><input type="text" id="name" placeholder="Nom" className="w-full h-full px-2 rounded-xl bg-secondary bg-opacity-20 border-b-2 border-secondary placeholder-white font-semibold"></input></div>
          <div className="basis-4/12 h-full"><input type="date" id="date" className="w-32 h-full px-2 rounded-xl bg-secondary bg-opacity-20 border-b-2 border-secondary text-white font-semibold"></input></div>
          <div className="basis-3/12 h-full"><button type="submit" className="h-full px-4 border-b-2 rounded-xl bg-secondary bg-opacity-20 border-secondary text-white font-semibold">Crear</button></div>
          <div className="basis-1/12 h-full bg-opacity-80"><div className="w-7 h-7 my-auto border-2 border-secondary border-opacity-80 bg-emerald-400 bg-opacity-75 rounded-lg"></div></div>
        </div>
        <div className="flex flex-col gap-y-2 w-full h-full p-3 bg-slate-50 rounded-t-2xl rounded-b-lg shadow-inner shadow-slate-300">
          <div className="flex flex-row text-sm gap-x-2">
            <div className="basis-1/6 my-auto"><div className="w-4 h-4 bg-emerald-400 bg-opacity-75 rounded-md mx-auto"></div></div>
            <div className="basis-2/6 text-center my-auto">2/03/2023</div>
            <div className="basis-3/6 text-center my-auto">Sortida Malgrat</div>
          </div>
          <div className="w-full h-0.5 rounded-lg  bg-secondary opacity-30"></div>
          <div className="flex flex-row text-sm gap-x-2">
            <div className="basis-1/6 my-auto"><div className="w-4 h-4 bg-orange-400 bg-opacity-75 rounded-md mx-auto"></div></div>
            <div className="basis-2/6 text-center">27/03/2023</div>
            <div className="basis-3/6 text-center">Cau</div>
          </div>
          <div className="w-full h-0.5 rounded-lg  bg-secondary opacity-30"></div>
          <div className="flex flex-row text-sm gap-x-2">
            <div className="basis-1/6 my-auto"><div className="w-4 h-4 bg-orange-400 bg-opacity-75 rounded-md mx-auto"></div></div>
            <div className="basis-2/6 text-center">27/03/2023</div>
            <div className="basis-3/6 text-center">Cau</div>
          </div>
          <div className="w-full h-0.5 rounded-lg  bg-secondary opacity-30"></div>
          <div className="flex flex-row text-sm gap-x-2">
            <div className="basis-1/6 my-auto"><div className="w-4 h-4 bg-orange-400 bg-opacity-75 rounded-md mx-auto"></div></div>
            <div className="basis-2/6 text-center">27/03/2023</div>
            <div className="basis-3/6 text-center">Cau</div>
          </div>
          <div className="w-full h-0.5 rounded-lg  bg-secondary opacity-30"></div>
          <div className="flex flex-row text-sm gap-x-2">
            <div className="basis-1/6 my-auto"><div className="w-4 h-4 bg-orange-400 bg-opacity-75 rounded-md mx-auto"></div></div>
            <div className="basis-2/6 text-center">27/03/2023</div>
            <div className="basis-3/6 text-center">Cau</div>
          </div>
          <div className="w-full h-0.5 rounded-lg  bg-secondary opacity-30"></div>
          <div className="flex flex-row text-sm gap-x-2">
            <div className="basis-1/6 my-auto"><div className="w-4 h-4 bg-orange-400 bg-opacity-75 rounded-md mx-auto"></div></div>
            <div className="basis-2/6 text-center">27/03/2023</div>
            <div className="basis-3/6 text-center">Cau</div>
          </div>
          <div className="w-full h-0.5 rounded-lg  bg-secondary opacity-30"></div>
          <div className="flex flex-row text-sm gap-x-2">
            <button className=" font-semibold rounded-lg mx-auto">+</button>
          </div>
        </div>
        <div className="flex flex-row w-full h-full p-3 gap-x-4 bg-white rounded-b-2xl rounded-t-lg shadow-inner shadow-slate-300">
          <div className="flex flex-col gap-y-2 basis-1/2">
            <div className="flex flex-row text-sm">
              <div className="basis-2/6 my-auto"><div className="w-4 h-4 bg-orange-400 bg-opacity-75 rounded-md mx-auto"></div></div>
              <div className="basis-4/6 text-center">Alex Obaya</div>
            </div>
            <div className="w-full h-0.5 rounded-lg bg-secondary opacity-30"></div>
          </div>
          <div className="flex flex-col gap-y-2 basis-1/2">
            <div className="flex flex-row text-sm">
              <div className="basis-2/6 my-auto"><div className="w-4 h-4 bg-orange-400 bg-opacity-75 rounded-md mx-auto"></div></div>
              <div className="basis-4/6 text-center">Marc Amella</div>
            </div>
            <div className="w-full h-0.5 rounded-lg bg-secondary opacity-30"></div>
            <div className="flex flex-row text-sm">
              <div className="basis-2/6 my-auto"><div className="w-4 h-4 bg-orange-400 bg-opacity-75 rounded-md mx-auto"></div></div>
              <div className="basis-4/6 text-center">Marc Amella</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full gap-y-2 bg-secondary bg-opacity-80 shadow-lg rounded-3xl p-2 text-sm">
        <div className="flex flex-row gap-x-3 px-1 py-1">
          <div className="basis-full my-auto h-full"><input type="text" id="name" placeholder="Buscar per nom" className="w-full h-full px-2 py-2 rounded-xl bg-secondary bg-opacity-20 border-b-2 border-secondary placeholder-white font-semibold"></input></div>
        </div>
        <div className="flex flex-col gap-y-2 w-full h-full p-3 bg-slate-50 rounded-2xl shadow-inner shadow-slate-300">
          <div className="flex flex-row text-sm gap-x-2">
            <div className="basis-1/6 my-auto"><div className="w-4 h-4 bg-emerald-400 bg-opacity-75 rounded-md mx-auto"></div></div>
            <div className="basis-2/6 text-center my-auto">2/03/2023</div>
            <div className="basis-3/6 text-center my-auto">Sortida Malgrat</div>
          </div>
        </div>
        
      </div>
      {/* <div className="flex flex-col w-full h-96 bg-secondary shadow-lg bg-opacity-80 rounded-3xl p-2 text-sm">
        <div className="flex flex-row justify-center gap-x-3">
          <div className="">
            <select className="py-2 px-2 bg-secondary rounded-2xl">
            {options.map((option, key) => {
                return(
                  <option key={option} value={option}>{option}</option>
                )
              })}
            </select>
          </div>
          <div className=""><button type="submit" className="h-full px-4 py-2 bg-accent bg-opacity-90 rounded-2xl text-white font-semibold">Guardar</button></div>
        </div>
        
      </div> */}
    </div>
  )
}