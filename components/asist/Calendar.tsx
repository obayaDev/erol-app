"use client"

import { branches } from "@prisma/client";
import { empty } from "@prisma/client/runtime";
import { add, addDays, format } from "date-fns"
import { use, useEffect, useState } from "react";
import { MdDeleteSweep, MdOutlineClose } from "react-icons/md";
import { RiCloseCircleFill } from "react-icons/ri";


export default function Calendar(props:{
  branchesData: branches[],
  activitiesTypes: {type: string, name: string}[],
}) {

  function arrayDayToDay(start:Date, end:Date, today:Date){
    let arrayDates:[{date: Date, isMonth: boolean, isDay: boolean}] = [{date: new Date(), isMonth: true, isDay: true}]
    for(let date = start; date <= end; date.setDate(date.getDate() + 1)){
      if(date.getMonth() === today.getMonth() && date.getDate() === today.getDate()){
        arrayDates.push({date: new Date(date), isMonth:true, isDay: true});
      }else if(date.getMonth() === today.getMonth()){
        arrayDates.push({date: new Date(date), isMonth:true, isDay: false});
      }else{
        arrayDates.push({date: new Date(date), isMonth: false, isDay: false});
      }
    };
    return arrayDates;
  }

  function makeRanges(ds: [{date: Date, isMonth: boolean, isDay: boolean}], rs:[{start: Date, end:Date, type: string}]){
    let dr: [{date: Date, isMonth: boolean, isDay: boolean, ranges: string, type: string}] = [{date: new Date(), isMonth: true, isDay: true, ranges: "none", type: ""}];
    ds.forEach((d) => {
      rs.forEach((r) => {
      if(d.date.getTime() === r.start.getTime()){
        if(r.start.getTime() === r.end.getTime()){
          dr.push({date: new Date(d.date), isMonth: d.isMonth, isDay: d.isDay, ranges: "uniqueDay", type: r.type});
        }else if(r.start.getTime() !== r.end.getTime()){
          dr.push({date: new Date(d.date), isMonth: d.isMonth, isDay: d.isDay, ranges: "start", type: r.type});
          for(let dateToIterate = addDays(r.start, 1); dateToIterate <= r.end; dateToIterate.setDate(dateToIterate.getDate() + 1)){
            if(dateToIterate.getTime() === r.end.getTime()){
              dr.push({date: new Date(dateToIterate), isMonth: d.isMonth, isDay: d.isDay, ranges: "end", type: r.type});
            }else{
              dr.push({date: new Date(dateToIterate), isMonth: d.isMonth, isDay: d.isDay, ranges: "middle", type: r.type});
            }
          }
        }
      }
      })
    })
    dr.shift();
    const buf = dr;
    ds.forEach((d) => {
      let exist: boolean = false;
      buf.forEach((subBuf) => {
        if(d.date.getTime() === subBuf.date.getTime()){
          exist = true;
        }
      });
      if(!exist){
        dr.push({date: new Date(d.date), isMonth: d.isMonth, isDay: d.isDay, ranges: "none", type: ""})
      }
    });
    dr.sort((a, b) => a.date.getTime() - b.date.getTime());
    return dr;
  }

  const today = new Date();

  const dates:[{date: Date, isMonth: boolean, isDay: boolean}] = arrayDayToDay(new Date(today.getFullYear() - 1, 8, 1), new Date(today.getFullYear(), 5, 30), today);
  dates.shift();

  let activities:[{start: Date, end:Date, type: string}] = [
    {
      start: new Date(2023, 4, 6),
      end: new Date(2023, 4, 7),
      type: "Cau",
    }
  ]
  activities.push({
    start: new Date(2023, 4, 13),
    end: new Date(2023, 4, 13),
    type: "Sort",
  },
  {
    start: new Date(2023, 4, 26),
    end: new Date(2023, 4, 28),
    type: "Camp",
  })

  const [ranges, setRanges] = useState(makeRanges(dates, activities));
  ranges.shift();

  //-----------------------------------------------------functions-to-CREATE-ranges-----------------------------------------------------

  const [selection, setSelection] = useState<{
    start: Date,
    end: Date,
    type: string,
  }>();

  const [selectionBuffer, setSelectionBuffer] = useState<Date>();
  const [selectionState, setSelectionState] = useState("none");

  function handleSelect (date: Date){
    if(selectionState === "editing" || selectionState === "none" || selectionState === "fin"){
      setRanges(makeRanges(dates, activities));
      setSelection(undefined);
      setSelectionBuffer(new Date(date));
      setSelectionState("creating");
    }else if(selectionState === "creating"){
      if(selectionBuffer){
        setSelection({
          start: selectionBuffer,
          end: date,
          type: "",
        });
        setSelectionState("fin");
      }
    }
  }

  useEffect(() => {
    if(selection && (selectionState === "creating" || selectionState === "fin"))
      activities.push(selection);
      setRanges(makeRanges(dates, activities));
  }, [selection]);

  //-----------------------------------------------------functions-to-EDIT-ranges-----------------------------------------------------

  const [branches, setBranches] = useState(props.branchesData);
 
  function handleEdit(date: Date){
    const range = activities.find(d => (d.start.getTime() === date.getTime()) || (d.end.getTime() === date.getTime()))
    setSelectionState("editing");
    setSelection(range);
  }
  

  return(

    <div className="max-w-md w-full min-w-full mt-2">

      <div className="grid grid-cols-7 text-center">
        <div className="">
          {`<`}
        </div>
        <div className="col-span-5"> May 2021</div>
        <div className="">
          {`>`}
        </div>
      </div>
      <div className="grid grid-cols-7 text-center my-6 text-xs text-black font-semibold text-opacity-40">
        <div>L</div>
        <div>M</div>
        <div>X</div>
        <div>J</div>
        <div>V</div>
        <div>S</div>
        <div>D</div>
      </div>
      <div className="grid grid-cols-7 text-center mt-2 text-sm gap-y-2">
        {
          ranges.map((date, dayKey) => {
            let toRender;
            if(date.isMonth){
              switch (date.ranges) {
                case "none":
                  toRender = <button  onClick={() => {handleSelect(date.date)}} className="pb-5" key={"datkey-" + dayKey}><div  key={"calBtn1" + dayKey} className={date.date.getDate() === today.getDate() ? "w-fit px-1 rounded-full mx-auto bg-accent bg-opacity-80 text-white":""}>{format(date.date, 'd')}</div></button>
                  break;
                case "uniqueDay":
                  toRender = <button onClick={() => {handleEdit(date.date)}} className="text-white bg-secondary bg-opacity-80 py-0.5 mx-0.5 rounded-xl" key={"datkey-" + dayKey}><div  key={"calBtn1" + dayKey} className={date.date.getDate() === today.getDate() ? "w-fit px-1 rounded-full mx-auto bg-accent":""}>{format(date.date, 'd')}</div><div  key={"calBtn9" + dayKey}>{date.type}</div></button>
                  break;
                case "start":
                  toRender = <button onClick={() => {handleEdit(date.date)}} className="text-white bg-secondary bg-opacity-80 py-0.5 ml-0.5 rounded-l-xl flex flex-col" key={"datkey-" + dayKey}><div  key={"calBtn2" + dayKey} className={date.date.getDate() === today.getDate() ? "w-fit px-1 rounded-full mx-auto bg-accent mt-0":"mt-0 mx-auto"}>{format(date.date, 'd')}</div><div  key={"calBtn10" + dayKey} className="mx-auto">{date.type}</div></button>
                  break;
                case "middle":
                  toRender = <button onClick={() => {handleEdit(date.date)}} className="text-white bg-secondary bg-opacity-80 py-0.5 flex" key={"datkey-" + dayKey}><div  key={"calBtn3" + dayKey} className={date.date.getDate() === today.getDate() ? "w-fit px-1 rounded-full bg-accent mt-0 mx-auto":"mt-0 mx-auto"}>{format(date.date, 'd')}</div></button>
                  break;
                case "end":
                  toRender = <button onClick={() => {handleEdit(date.date)}} className="text-white bg-secondary bg-opacity-80 py-0.5 mr-0.5 rounded-r-xl flex" key={"datkey-" + dayKey}><div  key={"calBtn4" + dayKey} className={date.date.getDate() === today.getDate() ? "w-fit px-1 rounded-full bg-accent mt-0 mx-auto":"mt-0 mx-auto"}>{format(date.date, 'd')}</div></button>
                  break;
                default:
                  toRender = "";
                  break;
              }
            }
            return toRender
          })
        }
      </div>
      <div className={`${(selectionState !== "none") ? "":"hidden"} flex flex-row gap-2 justify-center -mb-4 -mt-3`}>
        <button className={` ${(selectionState === "creating" || selectionState === "fin") ? "":"hidden"} px-4 py-2 bg-white rounded-full shadow-xl tracking-wider`}>Crear</button>
        <button onClick={() => {setSelectionState("none"); setRanges(makeRanges(dates, activities));}} className="my-auto bg-white rounded-full p-0.5 shadow-lg shadow-slate-300 hover:shadow-xl border-2 border-transparent hover:border-secondary hover:border-opacity-20 hover:bg-opacity-40"><MdOutlineClose className="text-2xl text-red-600 text-opacity-80"/></button>
      </div>
      <div className={`${selectionState !== "none" ? "":"hidden"} flex flex-row justify-evenly text-center bg-secondary bg-opacity-10 rounded-2xl shadow-inner shadow-slate-300 mt-2 py-3  text-xs`}>
        <div className="my-auto">{selection ? format(selection.start, "dd/MM/yy"):(selectionBuffer ? format(selectionBuffer, "dd/MM/yyyy"):"")}</div>
        <div className="my-auto">{selection ? format(selection.end, "dd/MM/yy"):"seleccin..."}</div>
        <select name="type" placeholder="branca" className="w-fit bg-transparent">
          {
            props.activitiesTypes.map((branch, key) => {
              return(
                <option key={"option" + key} value={branch.type}>{branch.name}</option>
              )
            })
          }
        </select>
        <button className={` ${selectionState === "editing" ? "":"hidden"} col-span-2 flex align-middle`}><MdDeleteSweep className="mx-auto leading-3 my-auto text-xl text-red-600 opacity-70"/></button>
      </div>
    </div>

  )
}