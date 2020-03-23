import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

class CalendarMonth extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  render() {
    return (
        <div>
            <Calendar
              onClickDay={this.onChange}
              value={this.state.date}
              minDate={new Date("2020-01-02T00:00:00.000Z")}
              maxDate={new Date("2020-12-31T23:59:00.000Z")}
              view={'month'}
            />
            <h1>{this.state.date.toISOString()}</h1>
        </div>
        
    );
  }
}

export default CalendarMonth;