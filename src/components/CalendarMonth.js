import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

class CalendarMonth extends Component {
  state = {
    date: new Date(new Date().getFullYear(), 0, 1),
  }

  onChange = date => this.setState({ date })

  render() {
    return (
        <div>
            <Calendar
              onClickYear={this.onChange}
              value={this.state.date}
              minDate={new Date(2020, 1, 1)}
              maxDate={new Date("2020-12-31T23:59:00.000Z")}
              view={'decade'}
            />
            <h1>{this.state.date.toISOString()}</h1>
        </div>
        
    );
  }
}

export default CalendarMonth;