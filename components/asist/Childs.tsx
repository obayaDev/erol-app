"use client"

import { childs } from "@prisma/client";
import { ChangeEvent, useState } from "react";
import { MdAddReaction, MdDeleteSweep, MdKeyboardArrowDown, MdOutlineDeleteSweep } from "react-icons/md";
import { useTransition, useDeferredValue } from "react";
import { ImBin } from "react-icons/im";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";

export default function Childs(
  props:{
    className?: string,
  }
){

  const [childs, setChilds] = useState([
    {
      assistence: true,
      child:{
        id: 1,
        name: "Alex",
        second_name: "Obaya",
        third_name: "Morales",
        year_birth: 2016,
        absences: 5,
        still_in: true,
        branchesId: 1,
        familyId: 1,
      }
    },
    {
      assistence: false,
      child:{
        id: 2,
        name: "Marc",
        second_name: "Amella",
        third_name: "Morales",
        year_birth: 2016,
        absences: 1,
        still_in: true,
        branchesId: 1,
        familyId: 1,
      }
    },
    {
      assistence: true,
      child:{
        id: 3,
        name: "Ona",
        second_name: "Rodoreda",
        third_name: "Morales",
        year_birth: 2016,
        absences: 9,
        still_in: false,
        branchesId: 1,
        familyId: 1,
      }
    },
  ])

  const [showEditor, setShowEditor] = useState(false);

  const [childToEdit, setChildToEdit] = useState({
    new: false,
    child:{
      id: 1,
      name: "Alex",
      second_name: "Obaya",
      third_name: "Morales",
      year_birth: 2016,
      absences: 5,
      still_in: true,
      branchesId: 1,
      familyId: 1,
    }
  });

  function handleInputChange (e:any , childId:any){
    const {name, value, checked} = e.target;
    if(name !== "still_in"){
      setChildToEdit({...childToEdit, [name]: value});
      console.log(name, value);
    }else if(name === "still_in"){
      setChildToEdit({...childToEdit, [name]: checked});
      console.log(name, checked, childToEdit);
    }
    
  }

  function handleCreateNewChild(){
    let open;
    let isNew;
    if(showEditor && !childToEdit.new){
      open = true;
      isNew = true;
    }else if(!showEditor){
      open = true;
      isNew = true;
    }else{
      open = false;
      isNew = false;
    }
    setShowEditor(open);
    setChildToEdit({
      new: isNew,
      child: {
        id: 0,
        name: "",
        second_name: "",
        third_name: "",
        year_birth: 0,
        absences: 0,
        still_in: true,
        branchesId: 0,
        familyId: 0,
      }
    });
    console.log("hey")
  }

  function handleOpenCloseEditor(child: any){
    let open = false;
    if(!showEditor){
      open = true;
    }else if(showEditor && child.child.id.toString() !== childToEdit.child.id.toString()){
      open = true;
    }else if(showEditor && child.child.id.toString() === childToEdit.child.id.toString()){
      open = false;
    }
    setShowEditor(open);
    setChildToEdit({new: false, child: child.child});

    /* setShowEditor(!showEditor || (child.child.id.toString() !== childToEdit.child.id.toString() && showEditor) || !(child.child.id.toString() === childToEdit.child.id.toString() && showEditor) ? true:false); setChildToEdit({new: false, child: child.child}); */
  }

  function handleChangeAssistence(id: number){
    let buf = childs;
    let updatedChilds = buf.map(child => {
      if (child.child.id === id) {
        return {
          ...child,
          assistence: !child.assistence
        };
      }
      return child;
    });
    setChilds(updatedChilds);
  }

  /* const childs:{assistence: boolean, child:childs}[] = [
    {
      assistence: true,
      child:{
        id: 1,
        name: "Alex",
        second_name: "Obaya",
        third_name: "Morales",
        year_birth: 2016,
        absences: 5,
        still_in: true,
        branchesId: 1,
        familyId: 1,
      }
    },
    {
      assistence: false,
      child:{
        id: 2,
        name: "Marc",
        second_name: "Amella",
        third_name: "Morales",
        year_birth: 2016,
        absences: 1,
        still_in: true,
        branchesId: 1,
        familyId: 1,
      }
    },
    {
      assistence: true,
      child:{
        id: 3,
        name: "Ona",
        second_name: "Rodoreda",
        third_name: "Morales",
        year_birth: 2016,
        absences: 9,
        still_in: false,
        branchesId: 1,
        familyId: 1,
      }
    },
  ] */

  return(
    <div className="flex flex-col relative">
      <button className={`${childToEdit.new ? "opacity-100":"opacity-0"} px-4 py-1 mx-auto relative -mt-4 -mb-2 z-10 bg-white shadow-lg rounded-full transition-opacity hover:bg-opacity-50 border-2 border-transparent hover:border-opacity-30 hover:border-secondary tracking-wider`}>Crear infant</button>
      <div className={`${showEditor ? "h-24 py-4":"h-0 py-0 overflow-hidden"} z-0 relative grid grid-cols-8 gap-x-4 gap-y-4 text-center px-6 bg-secondary bg-opacity-10 rounded-2xl shadow-inner shadow-slate-300 transition-[height]`}>
        <div className="flex flex-row justify-evenly col-span-8 tracking-wider text-xs">
          <div className="text-center font-semibold text-secondary leading-4 my-auto">Nom:</div>
          <input type="text" name="name" placeholder="nom" className="w-1/4 bg-transparent text-center" value={childToEdit.child.name} onChange={(e) => handleInputChange(e, childToEdit.child.id)}></input>
          <input type="text" name="second_name" placeholder="1r cognom" className="w-1/4 bg-transparent text-center" value={childToEdit.child.second_name} onChange={(e) => handleInputChange(e, childToEdit.child.id)}></input>
          <input type="text" name="third_name" placeholder="2n cognom" className="w-1/4 bg-transparent text-center" value={childToEdit.child.third_name} onChange={(e) => handleInputChange(e, childToEdit.child.id)}></input>
        </div>
        <div className="col-span-2 tracking-wider flex flex-col text-xs gap-y-1"><span className="font-semibold text-secondary">Any: </span><input type="text" name="year_birth" className="w-3/4 bg-transparent mx-auto text-center" value={childToEdit.child.year_birth} onChange={(e) => handleInputChange(e, childToEdit.child.id)}></input></div>
        <div className="col-span-2 tracking-wider flex flex-col text-xs gap-y-1"><span className="font-semibold text-secondary">Faltes: </span><input type="number" name="absences" className="w-1/3 bg-transparent mx-auto text-center" value={childToEdit.child.absences} onChange={(e) => handleInputChange(e, childToEdit.child.id)}></input></div>
        <div className="col-span-2 tracking-wider flex flex-col text-xs gap-y-1"><span className="font-semibold text-secondary">Segueix: </span><input type="checkbox" name="still_in" className="w-1/3 accent-emerald-500 opacity-70 mx-auto text-center"  defaultChecked={childs[0].child.still_in} onChange={(e) => handleInputChange(e, childToEdit.child.id)}></input></div>
        <button className="col-span-2 flex align-middle"><MdDeleteSweep className="mx-auto leading-3 my-auto text-2xl text-red-600 opacity-70"/></button>
      </div>
      <div className={showEditor ? "h-5":"h-0" + "trnasition-[height"}></div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-3 px-4">
        {
          childs.map((child) => {
            return(
              <div className="grid grid-cols-6 gap-x-2">
                <button onClick={() => {handleChangeAssistence(child.child.id)}} className={`${child.assistence ? "bg-emerald-400":"bg-red-500"} w-4 h-4 bg-opacity-70 rounded-md`}></button>
                <button onClick={() => {handleOpenCloseEditor(child)}} className="col-span-5 leading-4">{child.child.name} {child.child.second_name}</button>
              </div>
            )
          })
        }
        <button onClick={() => {handleCreateNewChild();}} className="text-center text-base my-auto py-0.5 leading-3 bg-secondary bg-opacity-20 rounded-full mx-6"><MdAddReaction className="mx-auto text-accent text-opacity-70"/></button>
      </div>
    </div>
  );
}