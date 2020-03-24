import React from 'react';
import './App.css';
import CalendarMonth from './components/CalendarMonth'
import CalendarHour from './components/CalendarHour'
import CalendarWeek from './components/CalendarWeek'

function App() {
  return (
    <div className="App">
      <CalendarMonth />
      <CalendarHour />
      <CalendarWeek />
    </div>
  );
}

export default App;
