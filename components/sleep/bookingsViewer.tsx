"use client"

import React, { useState, useEffect } from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { createStaticRanges, DateRangePicker } from 'react-date-range';
const rdrLocales = require('react-date-range/dist/locale');
import { addDays, isWeekend, toDate } from 'date-fns';
import LoadingDots from "@/components/login/loading-dots";

export default function SeeBookingCalendar() {

  const [loading, setLoading] = useState(true);
  const [occupiedDates, setOccupiedDates] = useState([{
    startDate: new Date(),
    endDate: new Date(),
    key: 'today',
  },]);

  useEffect(() => {
    fetch("/api/sleep/getSleepForms")
    .then((res) => res.json())
    .then((data) => {

      data.forEach((sleepForm: { dateIn: Date, dateOut: Date}, key: number ) => {
        sleepForm.dateIn = new Date(sleepForm.dateIn);
        sleepForm.dateOut = new Date(sleepForm.dateOut);
        sleepForm.dateIn.setHours(0, 0);
        sleepForm.dateOut.setHours(0, 0);

        occupiedDates.push({
          startDate: sleepForm.dateIn,
          endDate: sleepForm.dateOut,
          key: key.toString(),
        });
      });
      setLoading(false);
    });
  }, []);

  const handleSelect = (ranges:any,) =>{

  }

  const styles = {
    calendar: {
      cursor: 'not-allowed',
    },
    monthAndYear: {
      pointerEvents: 'none',
    },
    day: {
      pointerEvents: 'none',
      cursor: 'default',
    },
    dayNumber: {
      pointerEvents: 'none',
      cursor: 'default',
    },
  };

  const rangeColors = ['#000000','#000000','#000000','#000000','#000000','#000000','#000000','#000000']


  const selectionRange = [
    {
      startDate: new Date(2022, 4, 1),
      endDate: new Date(2022, 4, 7),
      key: 'range1',
    },
    {
      startDate: new Date(2022, 5, 1),
      endDate: new Date(2022, 5, 7),
      key: 'range2',
    },
  ];
  
  return (
      <div>
        
        {loading ? (
          <div className="h-72 w-80 mx-1.5 my-0.5 flex justify-center align-middle">
            <LoadingDots color="#808080"/>
        </div>
        ) : (
          <DateRangePicker
            months={2}
            className={`rounded-3xl overflow-hidden shadow-md`}
            ranges={occupiedDates} 
            minDate={new Date()}
            maxDate={addDays(new Date(), 365)}
            locale={rdrLocales.es}
            onChange={handleSelect}
            editableDateInputs={false} // disable date input fields
            moveRangeOnFirstSelection={false} // disable selecting a new range
            showPreview={false}
            showDateDisplay={false}
            staticRanges={[]}
            inputRanges={[]}
            rangeColors={rangeColors}
          />
        )}
      </div>
  );
}