import React from 'react';
import './App.css';
import CalendarMonth from './components/CalendarMonth'
import CalendarHour from './components/CalendarHour'

function App() {
  return (
    <div className="App">
      <CalendarMonth />
      <CalendarHour />
    </div>
  );
}

export default App;
