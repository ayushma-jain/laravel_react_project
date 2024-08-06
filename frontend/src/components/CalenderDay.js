import React from 'react';
import { CalendarDayBox } from './StyledComponents';

const CalenderDay = ({ day, handleClickOpen }) => {
  return (
    <CalendarDayBox  className={`calendar-day ${day ? '' : 'empty'}`} onClick = {()=>handleClickOpen(day)}>
         {day}
    </CalendarDayBox>
    
  )
}

export default CalenderDay
