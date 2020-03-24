import React from 'react';
import './App.css';
import CalendarMonth from './components/CalendarMonth'
import CalendarHour from './components/CalendarHour'
import CalendarWeek from './components/CalendarWeek'
import CalendarDay from './components/CalendarDay'

function App() {
  return (
    <div className="App">
      <CalendarMonth />
      <CalendarHour />
      <CalendarWeek />
      <CalendarDay />
    </div>
  );
}

export default App;
