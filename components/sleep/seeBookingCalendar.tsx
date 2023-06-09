"use client"

import React, { useState, useEffect } from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
const rdrLocales = require('react-date-range/dist/locale');
import { addDays, isWeekend, toDate } from 'date-fns';
import LoadingDots from "@/components/login/loading-dots";

export default function SeeBookingCalendar() {

  function calcWeekdays(startDate:Date, endDate:Date) {
    var date  = startDate;
    var dates = [];

    while (date < endDate) {
        if (!isWeekend(date)) dates.push(new Date(date));
        date.setDate( date.getDate() + 1 );
    }
    return dates;
  }

  function calcWeekends(startDate:Date, endDate:Date) {
    var date  = startDate;
    var dates = [];

    while (date < endDate) {
        if (isWeekend(date)) dates.push(new Date(date));
        date.setDate( date.getDate() + 1 );
    }
    return dates;
  }

  const [loading, setLoading] = useState(true);
  const [disabledDates, setDisabledDates] = useState(calcWeekdays(new Date(), addDays(new Date(), 365)));
  const [enabledDates, setEnabledDates] = useState(calcWeekends(new Date(), addDays(new Date(), 365)));

  useEffect(() => {
    fetch("/api/sleep/getSleepForms")
    .then((res) => res.json())
    .then((data) => {
      const datesToRemove:Date[] = [];
      data.forEach((sleepForm: { dateIn: Date, dateOut: Date}) => {
        sleepForm.dateIn = new Date(sleepForm.dateIn);
        sleepForm.dateOut = new Date(sleepForm.dateOut);
        sleepForm.dateIn.setHours(0, 0);
        sleepForm.dateOut.setHours(0, 0);
        datesToRemove.push(sleepForm.dateIn);
        datesToRemove.push(sleepForm.dateOut);
      });

      disabledDates.push(...datesToRemove);
      disabledDates.sort((a, b) => a.getTime() - b.getTime());
      setLoading(false);
    })
  }, []);

  const [startDate, setStartDate] = useState(enabledDates[0]);
  const [endDate, setEndDate] = useState(enabledDates[1]);

  const handleSelect = (ranges:any,) =>{
    setStartDate(ranges.Selection.startDate);
    setEndDate(ranges.Selection.endDate);
  }

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'Selection'
  }
  
  return (
      <div>
        
        {loading ? (
          <div className="h-72 w-80 mx-1.5 my-0.5 flex justify-center align-middle">
            <LoadingDots color="#808080"/>
        </div>
        ) : (
          <DateRangePicker
            className={`rounded-lg overflow-hidden shadow-md`}
            ranges={[selectionRange]} 
            minDate={new Date()}
            maxDate={addDays(new Date(), 365)}
            locale={rdrLocales.es}
            onChange={handleSelect}
            moveRangeOnFirstSelection={true}
            showDateDisplay={false}
            staticRanges={[]}
            inputRanges={[]}
            disabledDates={disabledDates}
            
          />
        )}
      </div>
  );
}