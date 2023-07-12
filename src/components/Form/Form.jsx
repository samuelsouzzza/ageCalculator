import React from 'react';
import { Container, Label, Input, SendButton } from './Form.styles.js';
import IconButton from './components/IconButton.jsx';

const Form = ({ dd, mm, yy, calculate }) => {
  const [day, setDay] = React.useState(28);
  const [month, setMonth] = React.useState(6);
  const [year, setYear] = React.useState(2003);
  return (
    <Container>
      <Label htmlFor='txtDay'>
        DAY
        <Input
          id='txtDay'
          type='text'
          maxLength={2}
          value={day}
          onChange={({ target }) => setDay(target.value)}
        />
      </Label>
      <Label htmlFor='txtMonth'>
        MONTH
        <Input
          id='txtMonth'
          type='text'
          maxLength={2}
          value={month}
          onChange={({ target }) => setMonth(target.value)}
        />
      </Label>
      <Label htmlFor='txtYear'>
        YEAR
        <Input
          id='txtYear'
          type='text'
          maxLength={4}
          value={year}
          onChange={({ target }) => setYear(target.value)}
        />
      </Label>
      <SendButton onClick={() => calculate(day, month, year)}>
        <IconButton />
      </SendButton>
    </Container>
  );
};

export default Form;
