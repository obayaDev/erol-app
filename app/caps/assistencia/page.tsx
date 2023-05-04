
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
  const rows = await prisma.branches.findUnique({
    where: {id: 1},
    select:{ User: true}
  });
  return(

    <div className="flex flex-col py-5 gap-y-5">
      <div className="flex flex-col w-full h-96 gap-y-3 bg-white shadow-lg shadow-secondary rounded-3xl p-3 text-sm">
        <div className="flex flex-row gap-x-3">
          <div className="basis-4/12 my-auto h-full"><input type="text" id="name" placeholder="Nom" className="w-full h-full px-2 rounded-2xl bg-secondary placeholder-white"></input></div>
          <div className="basis-4/12 h-full"><input type="date" id="date" className="w-32 h-full px-2 rounded-2xl bg-secondary text-white"></input></div>
          <div className="basis-1/12 h-full p-1.5 bg-secondary rounded-xl"><div className="w-6 h-6 my-auto bg-emerald-400 rounded-lg"></div></div>
          <div className="basis-3/12 h-full"><button type="submit" className="h-full px-4 bg-accent rounded-2xl text-white font-semibold">Crear</button></div>
        </div>
        <div className="w-full h-full p-3 rounded-2xl shadow-inner shadow-secondary">
        
        </div>
      </div>
      <div className="flex flex-col w-full h-96 gap-y-3 bg-white shadow-lg shadow-secondary rounded-3xl p-3 text-sm">
        <div className="flex flex-row gap-x-3">
          <div className="basis-4/12 my-auto h-full"><input type="text" id="name" placeholder="Nom" className="w-full h-full px-2 rounded-2xl bg-secondary placeholder-white"></input></div>
          <div className="basis-4/12 h-full"><input type="date" id="date" className="w-32 h-full px-2 rounded-2xl bg-secondary text-white"></input></div>
          <div className="basis-1/12 h-full p-1.5 bg-secondary rounded-xl"><div className="w-6 h-6 my-auto bg-emerald-400 rounded-lg"></div></div>
          <div className="basis-3/12 h-full"><button type="submit" className="h-full px-4 bg-accent rounded-2xl text-white font-semibold">Crear</button></div>
        </div>
        <div className="w-full h-full p-3 rounded-2xl shadow-inner shadow-secondary">
        
        </div>
      </div>
    </div>
  )
}