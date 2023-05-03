
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
    <div>hey</div>
  )
}