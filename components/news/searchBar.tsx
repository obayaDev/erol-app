"use client";

import Link from "next/link"
import { AiOutlineSearch } from 'react-icons/ai';
import { useState } from "react";



export default function NewsSearchBar() {
    const [value, setValue] = useState("b")

    function logValue() {
        console.log(value)
    }
  
    return (
      <div className="flex flex-row w-fit mx-auto space-x-3 rounded-xl">
        <div className="my-auto">
            <select placeholder='tema' className='rounded-lg text-sm shadow-md text-center px-2 py-0.5 max-h-7'>
              <option value="public">Public</option>
              <option value="sortida">Sortida</option>
              <option value="autos">Autos</option>
              <option value="cau">Cau</option>
              <option value="campas">Campas</option>
              <option value="tunel">Tunel</option>
              <option value="patge">Patge</option>
              <option value="nitReis">Nit reis</option>
              <option value="previa">Previa</option>
              <option value="papam">Papam</option>
              <option value="trag">Trag</option>
            </select>
        </div>
        <div className="my-auto">
          <select placeholder='branca' className='rounded-lg text-sm shadow-md text-center px-2 py-0.5 max-h-7'>
            <option value="cills">Totes</option>
            <option value="cills">CiLL's</option>
            <option value="llids">LliD's</option>
            <option value="tiss">TiS's</option>
            <option value="rings">RiNG's</option>
            <option value="pics">PiC's</option>
            <option value="trucs">Trucs</option>
          </select>
        </div>

        <input type="text" placeholder='Buscar...' className="rounded-lg my-auto shadow-md px-2 max-h-6 w-1/2"></input>
        <Link href="/" className='my-auto'><AiOutlineSearch/></Link>
      </div>
    );
}