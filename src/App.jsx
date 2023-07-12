import React from 'react';
import './Reset.css';
import { Wrapper, Card } from './App.styles.js';
import Form from './components/Form/Form';
import Display from './components/Display/Display';
import moment from 'moment';

function App() {
  const [date, setDate] = React.useState({});
  function calculateAge(dd, mm, yy) {
    const dateBirth = moment(`${yy}-${mm}-${dd}`, 'YYYY-MM-DD');
    const dateToday = moment();

    const difference = moment.duration(dateToday.diff(dateBirth));

    const differenceYears = difference.years();
    const differenceMonths = difference.months();
    const differenceDays = difference.days();

    const age = {
      years: differenceYears,
      months: differenceMonths,
      days: differenceDays,
    };

    setDate(age);
  }
  return (
    <Wrapper>
      <Card>
        <Form calculate={calculateAge} />
        <Display dd={date.days} mm={date.months} yy={date.years} />
      </Card>
    </Wrapper>
  );
}

export default App;
