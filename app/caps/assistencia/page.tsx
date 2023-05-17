
import prisma from "@/prisma/client";
import Event from "@/components/asist/Childs";
import Calendar from "@/components/asist/Calendar";
import Childs from "@/components/asist/Childs";

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

  /* function generateArrayFromToYear (start: number, end:number){
    const array:number[] = []
    for (let year = start; year <= end; year++){
      array.push(year);
    }
    return array
  }

  const options = generateArrayFromToYear(new Date().getFullYear() - 18, new Date().getFullYear() - 7); */

  async function loadEvents () {
    "use server";

    return await prisma.branches.findMany(
      {
        where:{
          branch: "cills",
        },
        select:{
          activities: true,
        }
      }
    );
  }

  async function loadBranches() {
    return await prisma.branches.findMany();
  }

  const activities = await prisma.branches.findMany({
    where:{
      branch: "cills",
    },
    select:{
      activities: true,
    }
  })

  const actTypes = [
    {
      type: "Cau",
      name: "Cau",
    },
    {
      type: "Sort",
      name: "Sortida",
    },
    {
      type: "Camp",
      name: "Campaments primavera",
    },
  ]

  return(

    <div className="flex flex-col py-5 gap-y-5 max-w-md">

      <div className="flex flex-col w-full gap-y-2 bg-secondary bg-opacity-80 shadow-lg rounded-3xl p-2 text-sm">
        <div className="flex flex-col w-full h-full py-3 px-2 bg-slate-50 rounded-t-2xl rounded-b-md shadow-inner shadow-slate-300">
          <Calendar branchesData={await loadBranches()} activitiesTypes={await actTypes}/>
        </div>

        <div className="flex flex-col w-full h-full px-3 pt-3 pb-3 bg-slate-50 rounded-b-2xl rounded-t-md shadow-inner shadow-slate-300">
          <Childs/>
        </div>
      </div>
    </div>
  )
}