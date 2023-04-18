"use client"

import React, { useState, useEffect } from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
const rdrLocales = require('react-date-range/dist/locale');
import { addDays, isWeekend } from 'date-fns';

export default function BookingCalendar(props:{setDateIn: Function, setDateOut: Function}) {

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

  const disabledDates = calcWeekdays(new Date(), addDays(new Date(), 365))
  const enabledDates = calcWeekends(new Date(), addDays(new Date(), 365))

  const [startDate, setStartDate] = useState(enabledDates[0]);
  const [endDate, setEndDate] = useState(enabledDates[1]);

  useEffect(() => {
    props.setDateIn(startDate);
    props.setDateOut(endDate);
  }, []);

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'Selection'
  }

  const handleSelect = (ranges:any,) =>{
    setStartDate(ranges.Selection.startDate);
    setEndDate(ranges.Selection.endDate);
    props.setDateIn(ranges.Selection.startDate);
    props.setDateOut(ranges.Selection.endDate);
  }
  
  return (
      <div>
        <DateRangePicker 
          className="rounded-lg overflow-hidden" 
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
      </div>
  );
}