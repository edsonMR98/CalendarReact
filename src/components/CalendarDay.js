import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

class CalendarDay extends Component {
  state = {
    date: new Date(),
    week: 0
  }

  onChange = date => this.setState({ date })

  render() {
    return (
        <div>
            <h1>DAY</h1>
            <Calendar
              onClickWeekNumber={n => this.setState({week: n})}
              value={this.state.date}
              minDate={new Date("2020-01-02T00:00:00.000Z")}
              maxDate={new Date("2020-12-31T23:59:00.000Z")}
              view={'month'}
              showWeekNumbers={true}
            />
            <Calendar
              onClickMonth={this.onChange}
              value={this.state.date}
              minDate={new Date("2020-01-02T00:00:00.000Z")}
              maxDate={new Date("2020-12-31T23:59:00.000Z")}
              view={'year'}
            />
            <h1>{this.state.date.toISOString()}</h1>
            <h1>{this.state.week}</h1>
        </div>
        
    );
  }
}

export default CalendarDay;