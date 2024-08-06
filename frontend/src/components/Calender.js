import React, { useState } from 'react';
import { Box, Button, Container,Typography } from '@mui/material';
import CalenderDay from './CalenderDay';
import { DateHeading, StyledHeading } from './StyledComponents';
import TodoCheckList from './TodoCheckList';

const Calender = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const handleClickOpen = (day) => {
    setSelectedDay(day);
    setOpen(true);
  };
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };
  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const days = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      // days.push(<CalenderDay key={`empty-${i}`} day={null} onClick={() => {}}  />);
      days.push(<CalenderDay key={`empty-${i}`}  day={null} onClick={() => {}}  />);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      // days.push(<CalenderDay key={`day-${i}`} day={i}  onClick={handleClickOpen}/>);
      days.push(<CalenderDay key={`day-${i}`} day={i}  handleClickOpen={handleClickOpen}/>);
    }

    return days;
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  };

  return (
    <Container>
      <StyledHeading>
        <Typography variant="h4" component="h1" gutterBottom>
          React Calendar
        </Typography>
      </StyledHeading>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
        <Button onClick={prevMonth} variant="contained">Prev</Button>
        <DateHeading>
          <Typography variant="h6">
            {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
          </Typography>
        </DateHeading>
        <Button onClick={nextMonth} variant="contained">Next</Button>
      </Box>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 1 }}>
        {renderCalendar()}
      </Box>
      <TodoCheckList selectedDay={selectedDay} open={open} setOpen={setOpen}></TodoCheckList>
    </Container>
  )
}

export default Calender
